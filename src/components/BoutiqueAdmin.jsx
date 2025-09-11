import React, { useState, useEffect } from 'react';

const BoutiqueAdmin = ({ colors }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ nombre: '', talla: '', precio: '', tipo: '', imagen: '' });
  const [saving, setSaving] = useState(false);
  const [editId, setEditId] = useState(null);

  // Base URL de la API - definir aquí para que esté disponible en todo el componente
  const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';

  const fetchProductos = () => {
    setLoading(true);
    fetch(`${API}/api/productos`)
      .then(res => res.json())
      .then(data => { setProductos(data); setLoading(false); })
      .catch(() => { setError('Error al cargar productos'); setLoading(false); });
  };
  useEffect(() => { fetchProductos(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      // Usamos la variable API para la URL
      const url = editId ? `${API}/api/productos/${editId}` : `${API}/api/productos`;
      const method = editId ? 'PUT' : 'POST';
      
      // Validar campos obligatorios
      if (!form.nombre || !form.precio) {
        setError('Nombre y precio son obligatorios');
        setSaving(false);
        return;
      }
      
      // Convertir precio a número
      const formData = { 
        ...form,
        precio: parseFloat(form.precio)
      };
      
      console.log('Enviando datos de producto:', formData);
      console.log('URL:', url);
      console.log('Método:', method);
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al guardar');
      }
      
      const data = await res.json();
      console.log('Respuesta del servidor:', data);
      
      setForm({ nombre: '', talla: '', precio: '', tipo: '', imagen: '' });
      setShowForm(false);
      setEditId(null);
      fetchProductos();
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError(`Error al guardar el producto: ${error.message}`);
    }
    setSaving(false);
  };

  const handleEdit = (prod) => {
    setForm({ ...prod });
    setEditId(prod.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este producto?')) return;
    await fetch(`${API}/api/productos/${id}`, { method: 'DELETE' });
    fetchProductos();
  };

  return (
    <div>
      <h3 style={{ color: colors.primary, marginBottom: 18 }}>Gestión de Boutique</h3>
      <button onClick={() => { setShowForm(true); setEditId(null); setForm({ nombre: '', talla: '', precio: '', tipo: '', imagen: '' }); }} style={{ background: colors.accent, color: '#fff', border: 'none', borderRadius: 8, padding: '10px 18px', fontWeight: 700, marginBottom: 18, cursor: 'pointer' }}>Agregar nuevo producto</button>
      {showForm && (
        <form onSubmit={handleSubmit} style={{ background: colors.background, padding: 18, borderRadius: 10, marginBottom: 24, boxShadow: `0 2px 8px ${colors.shadow}`, maxWidth: 420 }}>
          <h4 style={{ color: colors.primary, marginBottom: 10 }}>{editId ? 'Editar Producto' : 'Nuevo Producto'}</h4>
          {error && <div style={{ color: 'red', marginBottom: 10, padding: '8px', backgroundColor: '#ffeeee', borderRadius: 5 }}>{error}</div>}
          <input required placeholder="Nombre" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }} />
          <input placeholder="Talla" value={form.talla} onChange={e => setForm(f => ({ ...f, talla: e.target.value }))} style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }} />
          <input required type="number" placeholder="Precio" value={form.precio} onChange={e => setForm(f => ({ ...f, precio: e.target.value }))} style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }} />
          <input placeholder="Tipo" value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))} style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }} />
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: colors.primary }}>
              Imagen:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={async e => {
                const file = e.target.files[0];
                if (!file) return;
                
                try {
                  const data = new FormData();
                  data.append('imagen', file);
                  
                  console.log('Subiendo imagen a:', `${API}/api/upload`);
                  const res = await fetch(`${API}/api/upload`, { 
                    method: 'POST', 
                    body: data 
                  });
                  
                  console.log('Respuesta del servidor:', res.status, res.statusText);
                  
                  if (!res.ok) {
                    if (res.status === 404) {
                      throw new Error('Endpoint de subida no encontrado. Verifica que el servidor esté funcionando.');
                    }
                    const errorText = await res.text().catch(() => 'Error desconocido');
                    throw new Error(`Error al subir imagen: ${res.status} - ${errorText}`);
                  }
                  
                  const result = await res.json();
                  console.log('Respuesta de upload:', result);
                  
                  if (result.url) {
                    setForm(f => ({ ...f, imagen: result.url }));
                    
                    if (result.warning) {
                      alert(`Imagen subida correctamente.\n\n⚠️ ${result.warning}`);
                    } else {
                      alert('Imagen subida correctamente');
                    }
                  } else {
                    throw new Error('No se recibió URL de imagen');
                  }
                } catch (error) {
                  console.error('Error al subir imagen:', error);
                  setError(`Error al subir imagen: ${error.message}`);
                }
              }}
              style={{ 
                marginBottom: 8,
                padding: '8px',
                border: `1px solid ${colors.accent}`,
                borderRadius: '4px',
                width: '100%'
              }}
            />
            
            {/* Campo manual para URL de imagen */}
            <label style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: colors.primary }}>
              O ingresa URL de imagen (recomendado para producción):
            </label>
            <input
              type="url"
              placeholder="https://ejemplo.com/imagen.jpg o https://imgur.com/imagen.jpg"
              value={form.imagen}
              onChange={e => setForm(f => ({ ...f, imagen: e.target.value }))}
              style={{ 
                width: '100%', 
                marginBottom: 8, 
                padding: 7, 
                borderRadius: 6, 
                border: `1px solid ${colors.accent}` 
              }}
            />
            <div style={{ fontSize: '12px', color: colors.secondary, marginBottom: 8, padding: '8px', backgroundColor: '#e8f4fd', borderRadius: '4px' }}>
              💡 <strong>Consejo:</strong> Para mejores resultados en producción, usa servicios como Imgur, Cloudinary, o Google Drive para alojar tus imágenes.
            </div>
            
            {form.imagen && (
              <div>
                <p style={{ fontSize: '12px', color: colors.secondary, marginBottom: 4 }}>
                  Vista previa:
                </p>
                <img 
                  src={form.imagen.startsWith('http') ? form.imagen : `${API}${form.imagen}`} 
                  alt="preview" 
                  style={{ 
                    width: 80, 
                    height: 80, 
                    objectFit: 'cover', 
                    borderRadius: 8, 
                    marginTop: 4, 
                    border: `1px solid ${colors.accent}` 
                  }} 
                  onError={(e) => {
                    console.error('Error cargando imagen preview:', form.imagen);
                    e.target.style.display = 'none';
                  }}
                />
                <div style={{ fontSize: '10px', color: colors.secondary, marginTop: '4px', wordBreak: 'break-all' }}>
                  {form.imagen}
                </div>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button type="submit" disabled={saving} style={{ background: colors.primary, color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', fontWeight: 700, cursor: 'pointer' }}>{editId ? 'Actualizar' : 'Guardar'}</button>
            <button type="button" onClick={() => setShowForm(false)} style={{ background: colors.secondary, color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', fontWeight: 700, cursor: 'pointer' }}>Cancelar</button>
          </div>
        </form>
      )}
      {loading ? (
        <div style={{ color: colors.secondary, fontSize: '1.1rem', padding: '2rem' }}>Cargando productos...</div>
      ) : error ? (
        <div style={{ color: 'red', fontSize: '1.1rem', padding: '2rem' }}>{error}</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {productos.map((prod) => (
            <div key={prod.id} style={{ background: colors.white, borderRadius: 12, boxShadow: `0 2px 8px ${colors.shadow}`, padding: 16, position: 'relative' }}>
              {prod.imagen ? (
                <img 
                  src={prod.imagen.startsWith('http') ? prod.imagen : `${API}${prod.imagen}`} 
                  alt={prod.nombre} 
                  style={{ 
                    width: '100%', 
                    height: 120, 
                    objectFit: 'cover', 
                    borderRadius: 8, 
                    marginBottom: 10, 
                    background: colors.background 
                  }}
                  onError={(e) => {
                    console.error('Error cargando imagen del producto:', prod.imagen);
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div style={{ 
                  width: '100%', 
                  height: 120, 
                  borderRadius: 8, 
                  marginBottom: 10, 
                  background: colors.background,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.secondary,
                  fontSize: '14px'
                }}>
                  Sin imagen
                </div>
              )}
              <div style={{ fontWeight: 800, color: colors.primary, fontSize: 17 }}>{prod.nombre}</div>
              <div style={{ color: colors.secondary, fontSize: 14, marginBottom: 4 }}>Talla: {prod.talla || '-'}</div>
              <div style={{ color: colors.secondary, fontSize: 14, marginBottom: 4 }}>Tipo: {prod.tipo || '-'}</div>
              <div style={{ color: colors.accent, fontWeight: 700, fontSize: 15 }}>Precio: ${prod.precio}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button onClick={() => handleEdit(prod)} style={{ background: colors.primary, color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 700, cursor: 'pointer' }}>Editar</button>
                <button onClick={() => handleDelete(prod.id)} style={{ background: colors.accent, color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 700, cursor: 'pointer' }}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoutiqueAdmin;
