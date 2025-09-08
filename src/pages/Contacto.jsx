import React from 'react';
import { colors } from '../styles/colors';
import fachadaImg from '../assets/Fachada.jpeg';

const Contacto = () => (
  <section style={{ background: colors.background, padding: '4rem 1rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '3rem',
        color: colors.primary,
        fontWeight: 900,
        fontSize: '2.5rem',
        letterSpacing: '-1px'
      }}>
        📍 Contáctanos
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2.5rem',
        alignItems: 'start'
      }}>
        {/* Imagen fachada */}
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: `0 8px 30px ${colors.shadow}`,
        }}>
          <img
            src={fachadaImg}
            alt="Fachada de My Precious Boutique"
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.5s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        {/* Info Cards + Mapa */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          
          {/* Tarjetas de Local y Contacto */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* Local */}
            <div style={{
              background: colors.white,
              borderRadius: '16px',
              padding: '1.8rem',
              boxShadow: `0 6px 20px ${colors.shadow}`,
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${colors.shadow}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 6px 20px ${colors.shadow}`; }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.7rem', color: colors.accent }}>🏬</div>
              <h5 style={{ color: colors.primary, fontWeight: 800, marginBottom: '0.5rem' }}>Nuestra Boutique</h5>
              <p style={{ color: colors.secondary, fontWeight: 700, marginBottom: '0.4rem' }}>My Precious Kid</p>
              <p style={{ color: colors.secondary, fontSize: '0.92rem' }}>Ropa, zapatos y accesorios exclusivos para niñas. ¡Visítanos y encuentra lo que tu pequeña merece!</p>
              <p style={{ color: colors.secondary, fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Avenida La Lorena & Bahía de Caráquez<br />
                Santo Domingo, Ecuador
              </p>
            </div>

            {/* Contacto */}
            <div style={{
              background: colors.white,
              borderRadius: '16px',
              padding: '1.8rem',
              boxShadow: `0 6px 20px ${colors.shadow}`,
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${colors.shadow}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 6px 20px ${colors.shadow}`; }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.7rem', color: colors.accent }}>📱</div>
              <h5 style={{ color: colors.primary, fontWeight: 800, marginBottom: '0.5rem' }}>Contáctanos</h5>
              <p style={{ marginBottom: '0.4rem', color: colors.secondary }}>
                <strong>Boutique: </strong>
                <a href="https://wa.me/593985668130" style={{ color: colors.accent, textDecoration: 'none', fontWeight: 700 }}>098 566 8130</a>
              </p>
              <p style={{ color: colors.secondary }}>
                <strong>Pacas: </strong>
                <a href="https://wa.me/593983456789" style={{ color: colors.accent, textDecoration: 'none', fontWeight: 700 }}>098 345 6789</a>
              </p>
            </div>
          </div>

          {/* Horarios */}
          <div style={{
            background: colors.white,
            borderRadius: '16px',
            padding: '1.8rem',
            boxShadow: `0 6px 20px ${colors.shadow}`,
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${colors.shadow}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 6px 20px ${colors.shadow}`; }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.7rem', color: colors.accent }}>⏰</div>
            <h5 style={{ color: colors.primary, fontWeight: 800, marginBottom: '0.5rem' }}>Horarios</h5>
            <p style={{ color: colors.secondary, fontSize: '0.9rem' }}>Lunes a Sábado: 8:00am - 6:00pm</p>
            <p style={{ color: colors.secondary, fontSize: '0.9rem' }}>Domingo: Previa cita</p>
          </div>

          {/* Mapa */}
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: `0 6px 20px ${colors.shadow}`,
          }}>
            <iframe
              title="Ubicación My Precious Kid"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.708978874615!2d-79.17262132579024!3d-0.25306973540876545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d546d3c8bdfb6f%3A0x3a2f57f632d80463!2sSanto%20Domingo%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1694194325675!5m2!1ses!2sec"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* Responsividad */}
    <style>{`
      @media (max-width: 900px) {
        div[style*='grid-template-columns: 1fr 1fr'] {
          grid-template-columns: 1fr !important;
        }
        iframe {
          height: 200px !important;
        }
        img {
          height: 300px !important;
        }
      }
    `}</style>
  </section>
);

export default Contacto;
