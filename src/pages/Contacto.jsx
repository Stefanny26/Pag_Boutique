import React from 'react';
import { colors } from '../styles/colors';
import localImg from '../assets/Fachada.jpeg';
import pacaImg from '../assets/PAca1.png';

const Contacto = () => (
  <section style={{ background: colors.background, padding: '4rem 1rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '3rem',
        color: colors.primary,
        fontWeight: 900,
        fontSize: '2.5rem',
        letterSpacing: '-1px',
        position: 'relative',
        display: 'inline-block',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <span style={{
          position: 'relative',
          zIndex: 2
        }}>📍 Contáctanos</span>
        <span style={{
          position: 'absolute',
          bottom: '0px',
          left: '0',
          width: '100%',
          height: '15px',
          background: 'rgba(232, 218, 206, 0.7)',
          zIndex: 1,
          borderRadius: '10px'
        }}></span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        background: 'white',
        borderRadius: '30px',
        overflow: 'hidden',
        padding: '20px'
      }}>
        {/* Imagen de la boutique - Columna izquierda */}
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: `0 8px 30px ${colors.shadow}`,
          border: `5px solid ${colors.white}`,
          height: '100%',
          gridRow: 'span 3', // Abarca 3 filas
          position: 'relative'
        }}>
          <img
            src={localImg}
            alt="Interior de My Precious Boutique"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            width: '90px',
            height: '90px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: `0 5px 15px ${colors.shadow}`,
            padding: '10px',
            border: `3px solid ${colors.background}`
          }}>
            <img 
              src={pacaImg} 
              alt="Pacas premium" 
              style={{
                width: '80%',
                height: '80%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}>
          {/* Tarjeta de Contacto */}
          <div style={{
            background: colors.white,
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: `0 6px 20px ${colors.shadow}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ 
              fontSize: '2rem', 
              marginBottom: '0.5rem', 
              color: colors.accent,
              background: colors.background,
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>📱</div>
            <h3 style={{ 
              color: colors.primary, 
              fontWeight: 800, 
              marginBottom: '0.5rem',
              fontSize: '1.3rem',
              textAlign: 'center'
            }}>Contáctanos</h3>
            
            <div style={{ width: '100%', textAlign: 'center' }}>
              <h4 style={{ 
                color: colors.accent, 
                marginBottom: '0.3rem', 
                fontWeight: 700,
                fontSize: '1rem'
              }}>
                Boutique:
              </h4>
              <a 
                href="https://wa.me/593985668130" 
                style={{ 
                  color: colors.secondary, 
                  textDecoration: 'none', 
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginBottom: '0.6rem',
                  background: 'rgba(37, 211, 102, 0.1)',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  transition: 'all 0.3s'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                098 566 8130
              </a>
              
              <h4 style={{ 
                color: colors.accent, 
                marginBottom: '0.3rem', 
                fontWeight: 700,
                fontSize: '1rem'
              }}>
                Pacas:
              </h4>
              <a 
                href="https://wa.me/593994752305" 
                style={{ 
                  color: colors.secondary, 
                  textDecoration: 'none', 
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: 'rgba(37, 211, 102, 0.1)',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  transition: 'all 0.3s'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                099 475 2305
              </a>
            </div>
          </div>

          {/* Tarjeta de Horarios */}
          <div style={{
            background: colors.white,
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: `0 6px 20px ${colors.shadow}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ 
              fontSize: '2rem', 
              marginBottom: '0.5rem', 
              color: colors.accent,
              background: colors.background,
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>⏰</div>
            <h3 style={{ 
              color: colors.primary, 
              fontWeight: 800, 
              marginBottom: '0.5rem',
              fontSize: '1.3rem'
            }}>Horarios</h3>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                color: colors.secondary, 
                fontSize: '1rem',
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                Lunes a Sábado: <br/>9:00am - 6:00pm
              </p>
              <p style={{ 
                color: colors.secondary, 
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                Domingo: <br/>Previa cita
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta de Nuestra Boutique - Debajo del Contacto y Horarios */}
        <div style={{
          background: colors.white,
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: `0 6px 20px ${colors.shadow}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gridColumn: '2', // Solo en la columna derecha
          transition: 'transform 0.3s',
          border: '1px solid rgba(0,0,0,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ 
              fontSize: '2rem', 
              marginBottom: '0.5rem', 
              color: colors.accent,
              background: colors.background,
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>🏬</div>
          <h3 style={{ 
            color: colors.primary, 
            fontWeight: 800, 
            marginBottom: '0.5rem',
            fontSize: '1.3rem'
          }}>Nuestra Boutique</h3>
          
          <p style={{ 
            color: colors.accent, 
            fontWeight: 700, 
            marginBottom: '0.5rem',
            fontSize: '1.1rem',
            textAlign: 'center'
          }}>
            My Precious Kid
          </p>
          
          <p style={{ 
            color: colors.secondary, 
            fontSize: '0.95rem',
            textAlign: 'center',
            marginBottom: '0.7rem',
            lineHeight: '1.4'
          }}>
            Ropa, zapatos y accesorios exclusivos para niñas. <br/>
            ¡Visítanos y encuentra lo que tu pequeña merece!
          </p>
          
          <div style={{
            border: `2px solid ${colors.background}`,
            borderRadius: '10px',
            padding: '0.8rem',
            width: '100%',
            textAlign: 'center',
            background: colors.background,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.5)',
              zIndex: 0
            }}></div>
            <p style={{ 
              color: colors.primary, 
              fontSize: '0.95rem', 
              fontWeight: '600',
              lineHeight: '1.4',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexDirection: 'column'
            }}>
              <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={colors.primary}>
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                </svg>
                Avenida La Lorena & Bahía de Caráquez
              </span>
              <span>Santo Domingo, Ecuador</span>
            </p>
          </div>
        </div>

        {/* Mapa en la sección inferior derecha */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: `0 6px 20px ${colors.shadow}`,
          border: `5px solid ${colors.white}`,
          gridColumn: '2', // Solo en la columna derecha
          marginTop: '0.5rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'white',
            borderRadius: '8px',
            padding: '5px 10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '0.8rem',
            fontWeight: 'bold'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={colors.accent}>
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
            </svg>
            My Precious Kid
          </div>
          <iframe
            title="Ubicación My Precious Kid"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.708978874615!2d-79.17262132579024!3d-0.25306973540876545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d546d3c8bdfb6f%3A0x3a2f57f632d80463!2sSanto%20Domingo%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1694194325675!5m2!1ses!2sec"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    {/* Responsividad */}
    <style>{`
      @media (max-width: 900px) {
        div[style*='gridTemplateColumns: 1fr 1fr'] {
          grid-template-columns: 1fr !important;
        }
        [style*="gridRow: span 3"] {
          grid-row: span 1 !important;
          height: 300px !important;
        }
        iframe {
          height: 200px !important;
          margin-top: 0.5rem;
        }
        h2 {
          font-size: 2rem !important;
        }
        h3 {
          font-size: 1.2rem !important;
        }
        section > div {
          padding: 1rem !important;
        }
        a[href*="wa.me"] {
          width: 80%;
          margin: 0 auto;
        }
      }

      /* Hover effects */
      a[href*="wa.me"]:hover {
        background: rgba(37, 211, 102, 0.2) !important;
        transform: translateY(-2px);
      }
      
      div[style*="boxShadow"]:hover:not([style*="borderRadius: 50%"]) {
        transform: translateY(-5px);
      }
    `}</style>
  </section>
);

export default Contacto;
