
import React from 'react';
import { colors } from '../styles/colors';
import fachadaImg from '../assets/Fachada.jpeg';

const Contacto = () => (
  <section style={{ background: colors.background, padding: '3rem 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', color: colors.primary, fontWeight: 900, fontSize: '2.2rem', letterSpacing: '-1px' }}>Contáctanos</h2>

      {/* Info Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2.2rem',
        marginBottom: '3rem',
        textAlign: 'center',
      }}>
        <div style={{
          background: colors.white,
          borderRadius: '14px',
          boxShadow: `0 2px 8px ${colors.shadow}`,
          padding: '2rem 1.2rem',
        }}>
          <div style={{ fontSize: '2.2rem', color: colors.accent, marginBottom: '0.7rem' }}>🏬</div>
          <h5 style={{ color: colors.primary, marginBottom: '1rem', fontWeight: 800, fontSize: '1.1rem' }}>Local</h5>
          <p style={{ fontWeight: 'bold', color: colors.secondary }}>My Precious Kid</p>
          <p style={{ color: colors.secondary }}>Venta de ropa, zapatos y accesorios solo para niñas. Americana nueva y de pacas.</p>
          <p style={{ color: colors.secondary }}>Avenida La Lorena & Bahía de Caráquez<br />Santo Domingo, Ecuador</p>
        </div>

        <div style={{
          background: colors.white,
          borderRadius: '14px',
          boxShadow: `0 2px 8px ${colors.shadow}`,
          padding: '2rem 1.2rem',
        }}>
          <div style={{ fontSize: '2.2rem', color: colors.accent, marginBottom: '0.7rem' }}>📱</div>
          <h5 style={{ color: colors.primary, marginBottom: '1rem', fontWeight: 800, fontSize: '1.1rem' }}>Contacto</h5>
          <div style={{ marginBottom: '0.7rem' }}>
            <span style={{ fontWeight: 700, color: colors.secondary }}>Boutique:&nbsp;</span>
            <a
              href="https://wa.me/593985668130"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.accent, textDecoration: 'none', fontWeight: 700 }}
            >
              098 566 8130
            </a>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: colors.secondary }}>Pacas:&nbsp;</span>
            <a
              href="https://wa.me/593983456789"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.accent, textDecoration: 'none', fontWeight: 700 }}
            >
              098 345 6789
            </a>
          </div>
          <p style={{ color: colors.secondary, marginTop: '1rem' }}>¡Contáctanos por WhatsApp para cualquier consulta!</p>
        </div>

        <div style={{
          background: colors.white,
          borderRadius: '14px',
          boxShadow: `0 2px 8px ${colors.shadow}`,
          padding: '2rem 1.2rem',
        }}>
          <div style={{ fontSize: '2.2rem', color: colors.accent, marginBottom: '0.7rem' }}>⏰</div>
          <h5 style={{ color: colors.primary, marginBottom: '1rem', fontWeight: 800, fontSize: '1.1rem' }}>Horarios</h5>
          <p style={{ color: colors.secondary }}>Lunes a Sábado: 8am - 18pm</p>
          <p style={{ color: colors.secondary }}>Domingo: Previa cita</p>
        </div>
      </div>

      {/* Mapa e imagen del local */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        maxWidth: '900px',
        margin: '0 auto 1.5rem auto',
        alignItems: 'stretch',
      }}>
        {/* Mapa */}
        <div style={{
          background: colors.white,
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: `0 2px 8px ${colors.shadow}`,
          minHeight: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <iframe
            src="https://www.google.com/maps?q=-0.2583988,-79.171774&hl=es;z=14&amp;output=embed"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación de My Precious Boutique"
          />
        </div>
        {/* Imagen fachada */}
        <div style={{
          background: colors.white,
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: `0 2px 8px ${colors.shadow}`,
          minHeight: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={fachadaImg}
            alt="Fachada de My Precious Boutique"
            style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .contacto-grid {
          grid-template-columns: 1fr !important;
        }
        div[style*='grid-template-columns: 1fr 1fr'] {
          grid-template-columns: 1fr !important;
        }
      }
      @media (max-width: 700px) {
        section {
          padding: 1rem;
        }
        form {
          padding: 1rem;
        }
        iframe, img {
          height: 220px !important;
        }
      }
    `}</style>
  </section>
);


export default Contacto;
