
import React from 'react';
import { colors } from '../styles/colors';
import Carrusel from '../components/Carrusel.jsx';
import logo from '../assets/logo.jpg';
import iconoInstagram from '../assets/icono1.png';
import iconoWhatsapp from '../assets/whatsapp.png';

const Inicio = () => (
  <>

    {/* Hero tipo card + info, inspirado en la imagen */}
    <section style={{
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '420px',
      background: colors.background,
      padding: '0',
      borderBottom: `1.5px solid ${colors.background}`
    }}>
      {/* Fondo crema claro a la izquierda */}
      <div style={{
        flex: '0 0 34%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        background: colors.background,
        borderRight: `1.5px solid ${colors.background}`
      }}>
        <div style={{
          background: colors.white,
          borderRadius: '16px',
          boxShadow: `0 4px 18px ${colors.shadow}`,
          padding: '2rem 1.5rem 1.5rem 1.5rem',
          minWidth: '260px',
          maxWidth: '320px',
          textAlign: 'center',
          margin: '2.5rem 0',
        }}>
          <div style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 1rem auto',
            border: `3px solid ${colors.accent}`
          }}>
            <img
              src={logo}
              alt="My Precious Boutique JC"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ color: colors.primary, fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.15rem', letterSpacing: '0.5px' }}>
            My Precious Boutique JC
          </h2>
          <div style={{ color: colors.secondary, fontSize: '0.98rem', marginBottom: '0.8rem', letterSpacing: '0.5px' }}>
            Distribuidora de Pacas Premium AAA
          </div>
          <div style={{ height: '2px', width: '32px', background: colors.accent, margin: '0 auto 0.8rem auto', borderRadius: '2px' }} />
          <div style={{ color: colors.secondary, fontSize: '0.93rem', marginBottom: '1.1rem', letterSpacing: '0.5px' }}>
            Boutique y Pacas en Santo Domingo
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.1rem' }}>
            <a href="https://wa.me/5930985668130" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={iconoWhatsapp} alt="WhatsApp" style={{ width: 28, height: 28, objectFit: 'contain', marginRight: 2 }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={iconoInstagram} alt="Instagram" style={{ width: 28, height: 28, objectFit: 'contain', marginRight: 2 }} />
            </a>
          </div>
        </div>
      </div>
      {/* Info derecha */}
      <div style={{
        flex: '1 1 92%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2.2rem',
        background: colors.white
      }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: colors.primary, marginBottom: '0.4rem', letterSpacing: '-1px' }}>
          ¡Bienvenido!
        </h1>
        <h3 style={{ color: colors.secondary, fontWeight: 500, marginBottom: '1.1rem', fontSize: '1.13rem' }}>
          Boutique y distribuidora de <span style={{ color: colors.accent, fontWeight: 700 }}>Pacas Americanas Premium AAA</span>
        </h3>
        <div style={{ display: 'flex', gap: '0.7rem', marginBottom: '1.3rem', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/5930985668130"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: colors.accent,
              color: colors.white,
              padding: '0.7rem 1.5rem',
              borderRadius: '22px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: `0 2px 8px ${colors.accentRGB.soft}`,
              border: 'none',
              letterSpacing: '0.5px',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => { e.target.style.background = colors.primary; }}
            onMouseOut={e => { e.target.style.background = colors.accent; }}
          >
            WhatsApp Boutique
          </a>
          <a
            href="https://wa.me/5930983402482"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: colors.white,
              color: colors.accent,
              padding: '0.7rem 1.5rem',
              borderRadius: '22px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              border: `2px solid ${colors.accent}`,
              letterSpacing: '0.5px',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => { e.target.style.background = colors.accent; e.target.style.color = colors.white; }}
            onMouseOut={e => { e.target.style.background = colors.white; e.target.style.color = colors.accent; }}
          >
            WhatsApp Pacas
          </a>
        </div>
        <p style={{ color: colors.secondary, fontSize: '1.01rem', maxWidth: '520px', lineHeight: '1.6' }}>
          Más de <strong>10 años de experiencia</strong> ofreciendo moda, calidad y confianza en Santo Domingo, Ecuador. Descubre nuestras ofertas y productos destacados para tu negocio o familia.
        </p>
      </div>
    </section>

    {/* Carrusel */}
    <div
      style={{
        width: '100vw',
        maxWidth: '100vw',
        minHeight: '220px',
        height: '38vw',
        maxHeight: '420px',
        overflow: 'hidden',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: colors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 2px 10px ${colors.shadow}`,
        zIndex: 2,
      }}
    >
      <Carrusel />
    </div>

    {/* Sección sobre Pacas Premium AAA */}
    <section style={{ background: colors.white, padding: '2.2rem 1rem', maxWidth: '1100px', margin: '2.5rem auto', borderRadius: '10px', boxShadow: `0 2px 8px ${colors.shadow}` }}>
      <h2 style={{ textAlign: 'center', color: colors.primary, marginBottom: '1.8rem', fontSize: '1.35rem', fontWeight: 800 }}>
        ¿Qué son las Pacas Americanas Premium AAA?
      </h2>
      <p style={{ color: colors.secondary, textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.3rem auto', fontSize: '1.01rem', lineHeight: '1.7' }}>
        Las <strong>Pacas Americanas Premium AAA</strong> son lotes de ropa usada importada de Estados Unidos que se caracterizan por
        <strong> calidad superior</strong>, <strong>marcas reconocidas</strong> y prendas en excelente estado. A diferencia de las pacas económicas,
        estas ofrecen <strong>más colores vibrantes y marcas populares</strong>, asegurando una mejor experiencia para emprendedores y negocios.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.1rem',
        marginTop: '1.2rem'
      }}>
        <div style={{ padding: '1.1rem', borderRadius: '8px', background: colors.background, textAlign: 'center', boxShadow: `0 1px 4px ${colors.shadow}` }}>
          <h3 style={{ color: colors.accent, marginBottom: '0.8rem', fontWeight: 700 }}>✔ Calidad Superior</h3>
          <p style={{ color: colors.secondary, fontSize: '1rem', lineHeight: '1.6' }}>
            Prendas cuidadosamente seleccionadas en excelente estado, con gran variedad y presentación impecable.
          </p>
        </div>
        <div style={{ padding: '1.1rem', borderRadius: '8px', background: colors.background, textAlign: 'center', boxShadow: `0 1px 4px ${colors.shadow}` }}>
          <h3 style={{ color: colors.accent, marginBottom: '0.8rem', fontWeight: 700 }}>✔ Marcas Reconocidas</h3>
          <p style={{ color: colors.secondary, fontSize: '1rem', lineHeight: '1.6' }}>
            Incluyen marcas populares y de alta rotación en el mercado estadounidense, ideales para tu negocio.
          </p>
        </div>
        <div style={{ padding: '1.1rem', borderRadius: '8px', background: colors.background, textAlign: 'center', boxShadow: `0 1px 4px ${colors.shadow}` }}>
          <h3 style={{ color: colors.accent, marginBottom: '0.8rem', fontWeight: 700 }}>✔ Ventajas Comerciales</h3>
          <p style={{ color: colors.secondary, fontSize: '1rem', lineHeight: '1.6' }}>
            Mayor margen de ganancia y rotación rápida gracias a la alta demanda de ropa de calidad.
          </p>
        </div>
      </div>
    </section>

    <br />
    <style>{`
      @media (max-width: 900px) {
        section {
          flex-direction: column !important;
          text-align: center;
        }
        h1 {
          font-size: 1.5rem !important;
        }
        .hero-card {
          margin: 1.2rem auto !important;
        }
      }
      @media (max-width: 700px) {
        section {
          padding: 1rem !important;
        }
        h1 {
          font-size: 1.1rem !important;
        }
      }
    `}</style>
  </>
);

export default Inicio;
