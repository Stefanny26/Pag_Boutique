import React, { useState, useEffect } from 'react';

const PacasAdmin = ({ colors }) => {
  const [pacas, setPacas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    precio: '',
    tipo: '',
    descripcion: '',
    prendas: '',
    imagen: '',
    marca: '',
    disponible: true
  });
  const [saving, setSaving] = useState(false);
  const [editId, setEditId] = useState(null);

  // Base URL de la API (Railway o localhost)
  const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';
  
  // Función para arreglar URLs de imágenes
  const fixImageUrl = (url) => {
    if (!url) return '';
    
    // Si ya es una URL completa, usarla como está
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // Si es una ruta relativa (comienza con /), añadir la base URL
    if (url.startsWith('/')) {
      return `${API}${url}`;
    }
    
    // En cualquier otro caso, asumimos que es una ruta relativa sin / inicial
    return `${API}/${url}`;
  };

  // Obtener pacas
  const fetchPacas = async () => {
    setLoading(true);
    setError('');
    try {
      console.log("Obteniendo pacas desde:", `${API}/api/pacas`);
      const res = await fetch(`${API}/api/pacas`);
      
      if (!res.ok) {
        throw new Error(`Error del servidor: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      console.log("Pacas obtenidas:", data);
      setPacas(data);
    } catch (err) {
      console.error("Error al cargar pacas:", err);
      setError(`Error al cargar pacas: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPacas(); }, []);

  // Guardar / editar paca
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const url = editId ? `${API}/api/pacas/${editId}` : `${API}/api/pacas`;
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
      
      // Si tenemos una imagen, asegurarnos que sea una ruta válida
      if (formData.imagen) {
        console.log('Imagen antes de enviar:', formData.imagen);
        // No modificamos la URL aquí, solo verificamos que exista
      }
      
      console.log('Enviando datos:', formData);
      console.log('URL:', url);
      console.log('Método:', method);
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Error del servidor: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      console.log('Respuesta del servidor:', data);
      
      // Mostrar mensaje de éxito
      alert(editId ? "Paca actualizada con éxito" : "Paca creada con éxito");
      
      setForm({
        nombre: '',
        precio: '',
        tipo: '',
        descripcion: '',
        prendas: '',
        imagen: '',
        marca: '',
        disponible: true
      });
      setShowForm(false);
      setEditId(null);
      fetchPacas();
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError(`Error al guardar la paca: ${error.message}`);
    }
    setSaving(false);
  };

  // Editar
  const handleEdit = (paca) => {
    setForm({ ...paca });
    setEditId(paca.id);
    setShowForm(true);
  };

  // Eliminar
  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar esta paca?')) return;
    await fetch(`${API}/api/pacas/${id}`, { method: 'DELETE' });
    fetchPacas();
  };

  return (
    <div>
      <h3 style={{ color: colors.primary, marginBottom: 18 }}>Gestión de Pacas</h3>
      <button
        onClick={() => {
          setShowForm(true);
          setEditId(null);
          setForm({ nombre: '', precio: '', tipo: '', descripcion: '', prendas: '', imagen: '', marca: '', disponible: true });
        }}
        style={{
          background: colors.accent,
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '10px 18px',
          fontWeight: 700,
          marginBottom: 18,
          cursor: 'pointer'
        }}
      >
        Agregar nueva paca
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: colors.background,
            padding: 18,
            borderRadius: 10,
            marginBottom: 24,
            boxShadow: `0 2px 8px ${colors.shadow}`,
            maxWidth: 420
          }}
        >
          <h4 style={{ color: colors.primary, marginBottom: 10 }}>{editId ? 'Editar Paca' : 'Nueva Paca'}</h4>
          {error && <div style={{ color: 'red', marginBottom: 10, padding: '8px', backgroundColor: '#ffeeee', borderRadius: 5 }}>{error}</div>}
          <input
            required
            placeholder="Nombre"
            value={form.nombre}
            onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
            style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }}
          />
          <input
            required
            type="number"
            placeholder="Precio"
            value={form.precio}
            onChange={e => setForm(f => ({ ...f, precio: e.target.value }))}
            style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }}
          />
          <input
            placeholder="Tipo"
            value={form.tipo}
            onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}
            style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }}
          />
          <input
            placeholder="Marca"
            value={form.marca}
            onChange={e => setForm(f => ({ ...f, marca: e.target.value }))}
            style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }}
          />
          <input
            placeholder="Prendas"
            value={form.prendas}
            onChange={e => setForm(f => ({ ...f, prendas: e.target.value }))}
            style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }}
          />
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: colors.primary }}>
              Imagen:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={async e => {
                try {
                  const file = e.target.files[0];
                  if (!file) return;
                  
                  console.log("Subiendo imagen:", file.name);
                  
                  const data = new FormData();
                  data.append('imagen', file);
                  
                  setError('');
                  setSaving(true);
                  
                  console.log('Intentando subir a:', `${API}/api/upload`);
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
                  console.log("Respuesta de subida:", result);
                  
                  if (result.url) {
                    console.log("URL de imagen recibida:", result.url);
                    setForm(f => ({ ...f, imagen: result.url }));
                    alert('Imagen subida correctamente');
                  } else {
                    throw new Error('No se recibió URL de imagen');
                  }
                } catch (error) {
                  console.error("Error subiendo imagen:", error);
                  setError(`Error al subir imagen: ${error.message}`);
                }
                setSaving(false);
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
              O ingresa URL de imagen:
            </label>
            <input
              type="url"
              placeholder="https://ejemplo.com/imagen.jpg"
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
            
            {form.imagen && (
              <div style={{ marginTop: 8, marginBottom: 8 }}>
                <p style={{ fontSize: '12px', color: colors.secondary, marginBottom: 4 }}>
                  Vista previa:
                </p>
                <img
                  src={fixImageUrl(form.imagen)}
                  alt="preview"
                  style={{ 
                    width: 80, 
                    height: 80, 
                    objectFit: 'cover', 
                    borderRadius: 8, 
                    border: `1px solid ${colors.accent}`,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                  onError={(e) => {
                    console.error("Error cargando vista previa:", form.imagen);
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/80?text=Error';
                  }}
                />
                <div style={{ fontSize: '10px', color: colors.secondary, marginTop: '4px', wordBreak: 'break-all' }}>
                  {form.imagen}
                </div>
              </div>
            )}
          </div>
          <textarea
            placeholder="Descripción"
            value={form.descripcion}
            onChange={e => setForm(f => ({ ...f, descripcion: e.target.value }))}
            style={{ width: '100%', marginBottom: 8, padding: 7, borderRadius: 6, border: `1px solid ${colors.accent}` }}
          />
          <label style={{ display: 'block', marginBottom: 8 }}>
            <input type="checkbox" checked={form.disponible} onChange={e => setForm(f => ({ ...f, disponible: e.target.checked }))} /> Disponible
          </label>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              type="submit"
              disabled={saving}
              style={{ background: colors.primary, color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', fontWeight: 700, cursor: 'pointer' }}
            >
              {editId ? 'Actualizar' : 'Guardar'}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              style={{ background: colors.secondary, color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div style={{ color: colors.secondary, fontSize: '1.1rem', padding: '2rem' }}>Cargando pacas...</div>
      ) : error ? (
        <div style={{ color: 'red', fontSize: '1.1rem', padding: '2rem' }}>{error}</div>
      ) : pacas.length === 0 ? (
        <div style={{ 
          color: colors.secondary, 
          fontSize: '1.1rem', 
          padding: '2rem', 
          textAlign: 'center',
          background: colors.background,
          borderRadius: 10,
          margin: '1rem 0'
        }}>
          No hay pacas disponibles. ¡Agrega tu primera paca!
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {pacas.map((paca) => (
            <div key={paca.id} style={{ background: colors.white, borderRadius: 12, boxShadow: `0 2px 8px ${colors.shadow}`, padding: 16, position: 'relative' }}>
              {!paca.disponible && <span style={{ position: 'absolute', top: 10, left: 10, background: colors.accent, color: '#fff', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13 }}>AGOTADO</span>}
              {paca.imagen ? (
                <img 
                  src={fixImageUrl(paca.imagen)} 
                  alt={paca.nombre} 
                  style={{ 
                    width: '100%', 
                    height: 120, 
                    objectFit: 'cover', 
                    borderRadius: 8, 
                    marginBottom: 10, 
                    background: colors.background 
                  }} 
                  onError={(e) => {
                    console.error("Error cargando imagen:", paca.imagen);
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
                  }}
                />
              ) : (
                <div style={{ 
                  width: '100%', 
                  height: 120, 
                  background: colors.background, 
                  borderRadius: 8, 
                  marginBottom: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.secondary,
                  fontSize: '14px'
                }}>
                  Sin imagen
                </div>
              )}
              <div style={{ fontWeight: 800, color: colors.primary, fontSize: 17 }}>{paca.nombre}</div>
              <div style={{ color: colors.secondary, fontSize: 14, marginBottom: 4 }}>{paca.descripcion}</div>
              <div style={{ color: colors.accent, fontWeight: 700, fontSize: 15 }}>Precio: ${paca.precio}</div>
              <div style={{ fontSize: 13, color: colors.secondary }}>Marca: {paca.marca || '-'}</div>
              <div style={{ fontSize: 13, color: colors.secondary }}>Tipo: {paca.tipo || '-'}</div>
              <div style={{ fontSize: 13, color: colors.secondary }}>Prendas: {paca.prendas || '-'}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button onClick={() => handleEdit(paca)} style={{ background: colors.primary, color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 700, cursor: 'pointer' }}>Editar</button>
                <button onClick={() => handleDelete(paca.id)} style={{ background: colors.accent, color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 700, cursor: 'pointer' }}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PacasAdmin;
