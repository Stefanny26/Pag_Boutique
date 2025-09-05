import React from 'react';
import { colors } from '../styles/colors';
import instagramIcon from '../assets/icono1.png';
import whatsappIcon from '../assets/whatsapp.png';
import tiktokIcon from '../assets/tik-tok.png';

const Footer = () => (
  <footer style={{ 
    background: colors.crema, 
    padding: '0.7rem 0.5rem 0.5rem 0.5rem', 
    marginTop: '1.2rem',
    color: colors.rosaSuave
  }}>
    <div style={{ 
      maxWidth: '1100px', 
      margin: '0 auto'
    }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '1.1rem',
        marginBottom: '1.1rem',
        alignItems: 'start',
      }}>
        {/* Columna 1: Sobre Nosotros */}
        <div>
          <h6 style={{ 
            color: colors.rosaSuave, 
            fontSize: '1.05rem', 
            marginBottom: '0.7rem',
            fontWeight: 'bold',
            marginTop: 0
          }}>
            ¿Quiénes somos?
          </h6>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            color: colors.verdeGris
          }}>
            <li style={{ marginBottom: '0.3rem' }}>Moda infantil de calidad</li>
            <li style={{ marginBottom: '0.3rem' }}>Diseños únicos y adorables</li>
            <li style={{ marginBottom: '0.3rem' }}>Atención personalizada</li>
            <li style={{ marginBottom: '0.3rem' }}>Vestimenta temática y casual</li>
            <li style={{ marginBottom: '0.3rem' }}>Amor en cada prenda</li>
          </ul>
        </div>

        {/* Columna 2: Redes Sociales */}
        <div style={{ textAlign: 'center' }}>
          <h6 style={{ 
            color: colors.rosaSuave, 
            fontSize: '1.05rem', 
            marginBottom: '0.7rem',
            fontWeight: 'bold',
            marginTop: 0
          }}>
            Síguenos en nuestras Redes
          </h6>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem',
            marginTop: '0.5rem',
            marginBottom: '0.2rem',
          }}>
            <a 
              href="https://www.instagram.com/my_precious_kid_/?igsh=MWQxb2p5ZDhnODA0aA%3D%3D#" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: colors.verdeGris }}
            >
              <img src={instagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
            </a>
            <a 
              href="https://wa.me/593985668130" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: colors.verdeGris }}
            >
              <img src={whatsappIcon} alt="WhatsApp" style={{ width: '32px', height: '32px' }} />
            </a>
            <a 
              href="https://www.tiktok.com/@my_precious_kid?_t=ZM-8wgebi0A1u1&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: colors.verdeGris }}
            >
              <img src={tiktokIcon} alt="Tik Tok" style={{ width: '32px', height: '32px' }} />
            </a>
          </div>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h6 style={{ 
            color: colors.rosaSuave, 
            fontSize: '1.05rem', 
            marginBottom: '0.7rem',
            fontWeight: 'bold',
            marginTop: 0
          }}>
            Contáctanos
          </h6>
          <p style={{ color: colors.verdeGris, marginBottom: '0.3rem', fontSize: '0.97rem' }}>
            <strong>Dirección:</strong> Avenida La Lorena & Bahía de Caráquez<br/>
            Sto. Domingo, Ecuador
          </p>
          <p style={{ color: colors.verdeGris, marginBottom: '0.3rem', fontSize: '0.97rem' }}>
            <strong>Teléfono:</strong> +593 98 566 8130
          </p>
          <p style={{ color: colors.verdeGris, marginBottom: '0.3rem', fontSize: '0.97rem' }}>
            <strong>Correo:</strong> infom_ypreciousboutiquejc.com
          </p>
          <p style={{ color: colors.verdeGris, marginBottom: '0.3rem', fontSize: '0.97rem' }}>
            <strong>Horario:</strong> Lun - Sab: 9:00 AM - 7:00 PM
          </p>
        </div>
      </div>

      <hr style={{ 
        border: 'none', 
        borderTop: `1px solid ${colors.verdePastel}`,
        margin: '1.1rem 0'
      }} />

      <p style={{ 
        textAlign: 'center', 
        color: colors.verdeGris, 
        margin: 0,
        fontSize: '0.89rem',
        paddingBottom: '0.2rem'
      }}>
        © <strong>My Precious Boutique JC</strong>. Todos los derechos reservados.
      </p>
    </div>

    <style>{`
      @media (max-width: 900px) {
        footer > div {
          max-width: 98vw !important;
        }
      }
      @media (max-width: 768px) {
        footer {
          padding: 1.2rem 0.5rem;
        }
        h6 {
          margin-top: 0.7rem;
        }
        .social-links {
          margin-bottom: 0.7rem;
        }
        footer > div > div {
          gap: 0.7rem !important;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
