import React from 'react';
import { pacas } from '../data/pacas';
import { colors } from '../styles/colors';

const Pacas = () => (

  <section style={{ padding: '2.5rem 0', background: colors.background }}>
    <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', color: colors.primary, fontWeight: 900, fontSize: '2.2rem', letterSpacing: '-1px' }}>
      Pacas de Ropa Americana
    </h2>
    <div style={{
      display: 'flex',
      gap: '2.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      alignItems: 'flex-start',
    }}>
      {/* Sección informativa fija a la izquierda */}
      <div style={{
        flex: '0 0 340px',
        position: 'sticky',
        top: '2rem',
        alignSelf: 'flex-start',
        background: colors.white,
        borderRadius: '18px',
        padding: '2.2rem 1.5rem',
        boxShadow: `0 4px 18px ${colors.shadow}`,
        height: 'fit-content',
        minWidth: '280px',
        maxWidth: '340px',
      }}>
        <h3 style={{ color: colors.accent, marginBottom: '1.2rem', textAlign: 'center', fontWeight: 800, fontSize: '1.3rem' }}>
          ¿Qué significa que una paca sea "casada"?
        </h3>
        <p style={{ color: colors.secondary, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
          Una paca <strong>"casada"</strong> es aquella que, por su <strong>alta demanda, rápida rotación y stock limitado</strong>, se vende junto con otra paca adicional.
        </p>
        <p style={{ color: colors.secondary, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
          Esta condición garantiza que tengas <strong>mayor surtido</strong>, aproveches la <strong>oferta exclusiva</strong> y asegures disponibilidad para tu negocio.
        </p>
        <p style={{ color: colors.accent, fontWeight: 700, marginTop: '1.2rem', textAlign: 'center' }}>
          ¡Así aseguras más variedad y mejor rentabilidad en tu compra!
        </p>
      </div>

      {/* Contenedor de cards de pacas */}
      <div style={{
        flex: '1',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2.5rem 2rem',
        justifyItems: 'center',
        alignItems: 'stretch',
      }}>
        {pacas.map((paca, idx) => (
          <div
            key={idx}
            style={{
              background: colors.white,
              borderRadius: '18px',
              boxShadow: `0 4px 18px ${colors.shadow}`,
              padding: '0',
              width: '100%',
              maxWidth: '320px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              minHeight: '420px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div style={{ width: '100%', height: '200px', background: colors.background, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img
                src={paca.imagen}
                alt={paca.nombre}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 0,
                  border: 'none',
                  backgroundColor: colors.background,
                  display: 'block',
                }}
              />
            </div>
            <div style={{ padding: '1.2rem 1.1rem 1.1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                <h3 style={{ color: colors.primary, fontWeight: 900, fontSize: '1.13rem', margin: 0, lineHeight: 1.18 }}>{paca.nombre}</h3>
                <span style={{ color: colors.accent, fontWeight: 800, fontSize: '1.08rem' }}>${paca.precio}</span>
              </div>
              <div style={{ color: colors.secondary, fontSize: '0.99rem', lineHeight: 1.5, marginBottom: '0.1rem' }}>{paca.descripcion}</div>
              <div style={{ display: 'flex', gap: '0.7rem', fontSize: '0.97rem', color: colors.secondary, marginBottom: '0.1rem' }}>
                <span><strong>Tipo:</strong> {paca.tipo}</span>
                {paca.prendas && <span style={{ color: colors.accent }}><strong>Prendas:</strong> {paca.prendas}</span>}
              </div>
              <a
                href={`https://wa.me/593983402482?text=Hola!%20Quiero%20comprar%20la%20paca%20${encodeURIComponent(paca.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: `1.5px solid ${colors.accent}`,
                  color: colors.accent,
                  background: 'transparent',
                  padding: '0.8rem 0',
                  borderRadius: '7px',
                  textDecoration: 'none',
                  display: 'block',
                  marginTop: '0.7rem',
                  fontWeight: 800,
                  fontSize: '1.01rem',
                  letterSpacing: '0.5px',
                  boxShadow: 'none',
                  borderWidth: '2px',
                  textAlign: 'center',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseOver={e => { e.target.style.background = colors.accent; e.target.style.color = colors.white; }}
                onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = colors.accent; }}
              >
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 1024px) {
        section > div {
          flex-direction: column;
        }
        div[style*='position: sticky'] {
          position: static;
          margin-bottom: 2rem;
          width: 100%;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
      }
      @media (max-width: 700px) {
        section {
          padding: 1rem;
        }
        div[style*='flex-wrap'] > div {
          width: 100% !important;
          margin-bottom: 1rem;
        }
      }
    `}</style>
  </section>
);

export default Pacas;
