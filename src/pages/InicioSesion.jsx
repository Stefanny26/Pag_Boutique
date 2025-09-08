import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../styles/colors';

const InicioSesion = () => {
  const [form, setForm] = useState({ user: '', pass: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.user === 'admin' && form.pass === 'admin123') {
      localStorage.setItem('adminAuth', '1');
      navigate('/panel-admin');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: colors.background }}>
      <form onSubmit={handleLogin} style={{ background: colors.white, padding: '2.5rem 2rem', borderRadius: 16, boxShadow: `0 4px 18px ${colors.shadow}`, minWidth: 320 }}>
        <h2 style={{ textAlign: 'center', color: colors.primary, marginBottom: 24 }}>Acceso Administrador</h2>
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: colors.secondary, fontWeight: 600 }}>Usuario</label>
          <input type="text" value={form.user} onChange={e => setForm(f => ({ ...f, user: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: `1px solid ${colors.accent}`, marginTop: 4 }} />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: colors.secondary, fontWeight: 600 }}>Contraseña</label>
          <input type="password" value={form.pass} onChange={e => setForm(f => ({ ...f, pass: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: `1px solid ${colors.accent}`, marginTop: 4 }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12, textAlign: 'center' }}>{error}</div>}
        <button type="submit" style={{ width: '100%', background: colors.primary, color: '#fff', padding: 10, border: 'none', borderRadius: 6, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Entrar</button>
      </form>
    </section>
  );
};

export default InicioSesion;
