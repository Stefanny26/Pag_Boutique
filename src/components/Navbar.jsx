import React from 'react';
import { colors } from '../styles/colors';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ 
    background: colors.white, 
    padding: '1.1rem 0', 
    boxShadow: `0 2px 12px ${colors.shadow}`,
    borderBottom: `2px solid ${colors.background}`
  }}>
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      maxWidth: '1200px', 
      margin: '0 auto',
      padding: '0 1.2rem'
    }}>
      <span style={{ 
        fontWeight: 900, 
        fontSize: '2.1rem', 
        color: colors.primary,
        letterSpacing: '-1px',
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{ fontSize: '2.2rem', color: colors.accent }}>👑</span>
        My Precious Boutique
      </span>
      <div style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <Link to='/' style={{ 
          color: colors.primary, 
          textDecoration: 'none', 
          fontWeight: 700,
          fontSize: '1.13rem',
          padding: '0.5rem 0.2rem',
          borderRadius: '4px',
          borderBottom: '2px solid transparent',
          transition: 'all 0.2s',
        }}>Inicio</Link>
        <Link to='/boutique' style={{ 
          color: colors.primary, 
          textDecoration: 'none', 
          fontWeight: 700,
          fontSize: '1.13rem',
          padding: '0.5rem 0.2rem',
          borderRadius: '4px',
          borderBottom: '2px solid transparent',
          transition: 'all 0.2s',
        }}>Boutique</Link>
        <Link to='/pacas' style={{ 
          color: colors.primary, 
          textDecoration: 'none', 
          fontWeight: 700,
          fontSize: '1.13rem',
          padding: '0.5rem 0.2rem',
          borderRadius: '4px',
          borderBottom: '2px solid transparent',
          transition: 'all 0.2s',
        }}>Pacas</Link>
        <Link to='/nosotros' style={{ 
          color: colors.primary, 
          textDecoration: 'none', 
          fontWeight: 700,
          fontSize: '1.13rem',
          padding: '0.5rem 0.2rem',
          borderRadius: '4px',
          borderBottom: '2px solid transparent',
          transition: 'all 0.2s',
        }}>Nosotros</Link>
        <Link to='/contacto' style={{ 
          color: colors.primary, 
          textDecoration: 'none', 
          fontWeight: 700,
          fontSize: '1.13rem',
          padding: '0.5rem 0.2rem',
          borderRadius: '4px',
          borderBottom: '2px solid transparent',
          transition: 'all 0.2s',
        }}>Contacto</Link>
        <Link to='/admin' style={{ 
          color: colors.white, 
          textDecoration: 'none', 
          fontWeight: 700,
          fontSize: '1.13rem',
          padding: '0.5rem 1.1rem',
          background: colors.accent,
          borderRadius: '22px',
          boxShadow: `0 1px 4px ${colors.accentRGB.soft}`,
          transition: 'all 0.2s',
          border: 'none',
        }}>Admin</Link>
      </div>
    </div>
    <style>{`
      nav a {
        position: relative;
      }
      nav a:not(:last-child):hover {
        color: ${colors.accent} !important;
        border-bottom: 2px solid ${colors.accent} !important;
        background: ${colors.background};
      }
      nav a:last-child:hover {
        opacity: 0.93;
        background: ${colors.primary};
        color: ${colors.white} !important;
      }
      @media (max-width: 900px) {
        nav > div {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        nav > div > div {
          margin-top: 1rem;
          flex-direction: column;
          gap: 1rem;
        }
        nav span {
          font-size: 1.7rem;
          margin-bottom: 1rem;
        }
        nav a {
          font-size: 1.05rem !important;
        }
      }
    `}</style>
  </nav>
);

export default Navbar;
