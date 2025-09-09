import React, { useState, useEffect } from 'react';
import { colors } from '../styles/colors';

const MARCAS = [
  'Todas',
  'Leon',
  'Santex',
  'Givenchy',
  'Otra',
];

const Pacas = () => {
  const [pacas, setPacas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [marca, setMarca] = useState('Todas');

  useEffect(() => {
    setLoading(true);
  const API = import.meta.env.VITE_API_URL || '';
  fetch(`${API}/api/pacas`)
      .then(res => res.json())
      .then(data => {
        setPacas(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar las pacas');
        setLoading(false);
      });
  }, []);

  const pacasFiltradas = marca === 'Todas'
    ? pacas
    : pacas.filter(p => (p.marca || '').toLowerCase() === marca.toLowerCase());

  return (
    <section style={{ background: colors.white, minHeight: '100vh', padding: 0 }}>
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-start',
          padding: '2.5rem 1.5rem 2.5rem 1.5rem',
          gap: '2.5rem',
        }}
      >
        {/* Filtros laterales */}
        <aside
          style={{
            minWidth: '220px',
            maxWidth: '260px',
            marginRight: '1rem',
            borderRight: `1.5px solid ${colors.background}`,
            paddingRight: '1.5rem',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: '1.25rem',
              color: colors.primary,
              marginBottom: '2.2rem',
              letterSpacing: '-1px',
            }}
          >
            Filtrar por marca
          </div>
          {MARCAS.map(m => (
            <div
              key={m}
              style={{
                marginBottom: '1.5rem',
                borderBottom: `1px solid ${colors.background}`,
                paddingBottom: '1.1rem',
              }}
            >
              <button
                onClick={() => setMarca(m)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: marca === m ? colors.accent : colors.primary,
                  fontWeight: marca === m ? 900 : 600,
                  fontSize: '1.08rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  padding: 0,
                  outline: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {m}
              </button>
            </div>
          ))}
        </aside>

        {/* Catálogo */}
        <main style={{ flex: 1, paddingLeft: 0 }}>
          <h2
            style={{
              textAlign: 'left',
              color: colors.primary,
              fontWeight: 900,
              fontSize: '1.3rem',
              marginBottom: '2.2rem',
              letterSpacing: '-1px',
            }}
          >
            Colección de Pacas
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2.2rem 1.2rem',
              alignItems: 'start',
            }}
          >
            {loading ? (
              <div style={{ color: colors.secondary, fontSize: '1.1rem', padding: '2rem' }}>Cargando pacas...</div>
            ) : error ? (
              <div style={{ color: 'red', fontSize: '1.1rem', padding: '2rem' }}>{error}</div>
            ) : (
              pacasFiltradas.map((paca, idx) => (
                <div
                  key={paca.id || idx}
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
                  <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                    {!paca.disponible && (
                      <span style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        background: colors.accent,
                        color: colors.white,
                        fontWeight: 900,
                        borderRadius: '8px',
                        padding: '0.3rem 0.8rem',
                        fontSize: '0.95rem',
                        zIndex: 2,
                        letterSpacing: '1px',
                      }}>
                        AGOTADO
                      </span>
                    )}
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
                  <div
                    style={{
                      padding: '1.2rem 1.1rem 1.1rem 1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.2rem',
                      }}
                    >
                      <h3
                        style={{
                          color: colors.primary,
                          fontWeight: 900,
                          fontSize: '0.98rem',
                          margin: 0,
                          lineHeight: 1.18,
                        }}
                      >
                        {paca.nombre}
                      </h3>
                      <span
                        style={{
                          color: colors.accent,
                          fontWeight: 800,
                          fontSize: '0.93rem',
                        }}
                      >
                        ${paca.precio}
                      </span>
                    </div>
                    <div
                      style={{
                        color: colors.secondary,
                        fontSize: '0.89rem',
                        lineHeight: 1.5,
                        marginBottom: '0.1rem',
                      }}
                    >
                      {paca.descripcion}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.7rem',
                        fontSize: '0.87rem',
                        color: colors.secondary,
                        marginBottom: '0.1rem',
                      }}
                    >
                      <span>
                        <strong>Tipo:</strong> {paca.tipo === 'Casada' ? <span style={{ color: colors.accent, fontWeight: 700 }}>Casada</span> : 'Sola'}
                      </span>
                      {paca.prendas && (
                        <span style={{ color: colors.accent }}>
                          <strong>Prendas:</strong> {paca.prendas}
                        </span>
                      )}
                      {paca.marca && (
                        <span style={{ color: colors.primary }}>
                          <strong>Marca:</strong> {paca.marca}
                        </span>
                      )}
                    </div>
                    <a
                      href={`https://wa.me/593983402482?text=Hola!%20Quiero%20comprar%20la%20paca%20${encodeURIComponent(
                        paca.nombre
                      )}`}
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
                        fontSize: '0.91rem',
                        letterSpacing: '0.5px',
                        boxShadow: 'none',
                        borderWidth: '2px',
                        textAlign: 'center',
                        transition: 'background 0.2s, color 0.2s',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = colors.accent;
                        e.target.style.color = colors.white;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = colors.accent;
                      }}
                    >
                      Comprar por WhatsApp
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>

        {/* Aside: Información sobre precios, cantidades y pacas casadas */}
        <aside style={{
          width: '320px',
          padding: '1.3rem',
          background: colors.background,
          borderRadius: '14px',
          boxShadow: `0 3px 10px ${colors.shadow}`,
          marginLeft: '2.5rem',
          fontSize: '0.92rem',
          color: colors.secondary,
          lineHeight: '1.5',
          position: 'relative',
        }}>
          <h3 style={{
            color: colors.accent,
            fontWeight: 800,
            fontSize: '1.05rem',
            marginBottom: '0.8rem',
            borderBottom: `2px solid ${colors.accent}`,
            paddingBottom: '0.3rem'
          }}>
            Importante sobre precios, cantidades y pacas casadas
          </h3>
          <p>
            Cada ítem que ves en nuestra lista corresponde a una paca diferente, con prendas y cantidades variables,
            por lo que los precios también cambian según cada tipo. Tenemos pacas diseñadas tanto para clima cálido (verano)
            como para clima frío (invierno).
          </p>
          <p>
            Por ejemplo, la <strong>Paca de Niño Verano Premium</strong> incluye aproximadamente 400 prendas variadas
            como blusas, shorts, pantalones, camisetas, licras y vestidos para niños y niñas desde recién nacido hasta 14 años.
          </p>
          <p>
            Algunas pacas, debido a su alta rotación y demanda, son <strong>“pacadas casadas”</strong>. Esto significa que para
            adquirir esa paca, se debe comprar junto con otra paca adicional, la cual será indicada por nuestra gerencia, según
            disponibilidad y stock.
          </p>
          <p>
            Esto nos permite mantener un equilibrio en inventarios y garantizar que todos nuestros clientes puedan acceder a estas
            pacas tan solicitadas.
          </p>
          <p style={{ fontStyle: 'italic', color: colors.primary, marginTop: '0.8rem' }}>
            Nota: No es posible elegir cualquier paca para combinar; la paca adicional será asignada por nuestro equipo autorizado.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Pacas;
