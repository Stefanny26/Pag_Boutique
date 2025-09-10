import React, { useState, useEffect } from 'react';
import { colors } from '../styles/colors';

// Importar imagen por defecto para cuando no hay imagen
import defaultPacaImg from '../assets/PAca1.png';

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

  // Base URL de la API
  const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';
  
  // Función para arreglar URLs de imágenes
  const fixImageUrl = (url) => {
    if (!url) return '';
    
    // Si ya es una URL completa, usarla como está
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // Si es una ruta relativa (comienza con /), añadir la base URL
    if (url.startsWith('/')) {
      return `${API}${url}`;
    }
    
    // En cualquier otro caso, asumimos que es una ruta relativa sin / inicial
    return `${API}/${url}`;
  };
  
  useEffect(() => {
    setLoading(true);
    console.log("Obteniendo pacas desde:", `${API}/api/pacas`);
    
    fetch(`${API}/api/pacas`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error del servidor: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("Pacas obtenidas:", data);
        setPacas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar pacas:", err);
        setError(`Error al cargar las pacas: ${err.message}`);
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
              pacasFiltradas.length === 0 ? (
                <div style={{ 
                  color: colors.secondary, 
                  fontSize: '1.1rem', 
                  padding: '2rem', 
                  gridColumn: '1 / -1',
                  textAlign: 'center'
                }}>
                  No hay pacas disponibles para esta categoría
                </div>
              ) : pacasFiltradas.map((paca, idx) => (
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
                    {paca.imagen ? (
                      <img
                        src={fixImageUrl(paca.imagen)}
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
                        onError={(e) => {
                          console.error("Error cargando imagen:", paca.imagen);
                          e.target.onerror = null;
                          e.target.src = defaultPacaImg;
                        }}
                      />
                    ) : (
                      <img
                        src={defaultPacaImg}
                        alt="Imagen por defecto"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: 0,
                          border: 'none',
                          backgroundColor: colors.background,
                          display: 'block',
                          padding: '1rem'
                        }}
                      />
                    )}
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

// Estilos para la versión móvil y tablet
const responsiveStyles = `
  @media (max-width: 1024px) {
    section > div {
      flex-direction: column;
    }
    
    aside {
      min-width: 100% !important;
      max-width: 100% !important;
      margin: 0 0 2rem 0 !important;
      padding: 1rem !important;
      border-right: none !important;
    }
    
    main {
      width: 100%;
      padding-left: 0 !important;
    }
    
    aside:last-child {
      width: 100% !important;
      margin-left: 0 !important;
      margin-top: 2rem !important;
    }
  }
  
  @media (max-width: 768px) {
    section > div {
      padding: 1.5rem 1rem !important;
    }
    
    main > div {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1.5rem 1rem !important;
    }
    
    main > div > div {
      max-width: 100% !important;
    }
  }
  
  @media (max-width: 480px) {
    main > div {
      grid-template-columns: 1fr !important;
    }
    
    main > div > div {
      margin: 0 auto !important;
      max-width: 90% !important;
    }
  }
`;

// Añadir los estilos al documento
React.useEffect(() => {
  // Crear elemento de estilo
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = responsiveStyles;
  document.head.appendChild(style);
  
  // Limpieza al desmontar
  return () => {
    document.head.removeChild(style);
  };
}, []);

export default Pacas;
