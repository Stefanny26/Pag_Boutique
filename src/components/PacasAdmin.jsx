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

  // Obtener pacas
  const fetchPacas = () => {
    setLoading(true);
    fetch(`${API}/api/pacas`)
      .then(res => res.json())
      .then(data => { setPacas(data); setLoading(false); })
      .catch(() => { setError('Error al cargar pacas'); setLoading(false); });
  };

  useEffect(() => { fetchPacas(); }, []);

  // Guardar / editar paca
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url = editId ? `${API}/api/pacas/${editId}` : `${API}/api/pacas`;
      const method = editId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Error al guardar');
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
    } catch {
      setError('Error al guardar la paca');
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
              <img
                src={form.imagen}
                alt="preview"
                style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, marginTop: 4, border: `1px solid ${colors.accent}` }}
              />
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
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {pacas.map((paca) => (
            <div key={paca.id} style={{ background: colors.white, borderRadius: 12, boxShadow: `0 2px 8px ${colors.shadow}`, padding: 16, position: 'relative' }}>
              {!paca.disponible && <span style={{ position: 'absolute', top: 10, left: 10, background: colors.accent, color: '#fff', borderRadius: 6, padding: '2px 8px', fontWeight: 700, fontSize: 13 }}>AGOTADO</span>}
              <img src={paca.imagen} alt={paca.nombre} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 10, background: colors.background }} />
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
