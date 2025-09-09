import React, { useState, useEffect } from 'react';

const BoutiqueAdmin = ({ colors }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ nombre: '', talla: '', precio: '', tipo: '', imagen: '' });
  const [saving, setSaving] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchProductos = () => {
    setLoading(true);
  const API = import.meta.env.VITE_API_URL || '';
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
            <input
              type="file"
              accept="image/*"
              onChange={async e => {
                const file = e.target.files[0];
                if (!file) return;
                const data = new FormData();
                data.append('imagen', file);
                const res = await fetch(`${API}/api/upload`, { method: 'POST', body: data });
                const result = await res.json();
                if (result.url) setForm(f => ({ ...f, imagen: result.url }));
              }}
              style={{ marginBottom: 4 }}
            />
            {form.imagen && (
              <img src={form.imagen} alt="preview" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, marginTop: 4, border: `1px solid ${colors.accent}` }} />
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
              <img src={prod.imagen} alt={prod.nombre} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 10, background: colors.background }} />
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
