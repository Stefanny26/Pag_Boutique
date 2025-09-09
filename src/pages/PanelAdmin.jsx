import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../styles/colors';
import PacasAdmin from '../components/PacasAdmin';
import BoutiqueAdmin from '../components/BoutiqueAdmin';

const PanelAdmin = () => {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState('pacas');

  useEffect(() => {
    if (localStorage.getItem('adminAuth') !== '1') {
      navigate('/iniciar-sesion');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/iniciar-sesion');
  };

  return (
    <section style={{ padding: '3rem 1rem', background: colors.background, minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto 2rem auto' }}>
        <h2 style={{ color: colors.primary, fontWeight: 900 }}>Panel de Administración</h2>
        <button onClick={handleLogout} style={{ background: colors.secondary, color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 700, cursor: 'pointer' }}>Cerrar sesión</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
        <button onClick={() => setTab('pacas')} style={{ padding: '8px 18px', borderRadius: 8, border: 'none', background: tab === 'pacas' ? colors.primary : colors.accent, color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Pacas</button>
        <button onClick={() => setTab('boutique')} style={{ padding: '8px 18px', borderRadius: 8, border: 'none', background: tab === 'boutique' ? colors.primary : colors.accent, color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Boutique</button>
      </div>
      {tab === 'pacas' && <PacasAdmin colors={colors} />}
      {tab === 'boutique' && <BoutiqueAdmin colors={colors} />}
    </section>
  );
};


export default PanelAdmin;
