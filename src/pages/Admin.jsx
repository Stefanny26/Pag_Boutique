import React from 'react';
import { colors } from '../styles/colors';
import iconoTiktok from '../assets/tik-tok.png';
import iconoInstagram from '../assets/icono1.png';
import imgAlexa from '../assets/AlexaStore.jpg';
import imgForbaby from '../assets/Forbaby.jpg';

const hermanaPages = [
  {
    nombre: "Alexa Store",
    descripcion: "Explora la mejor selección de ropa de mujer y accesorios únicos. ¡Renueva tu estilo con lo más trendy!",
    url: "https://www.tiktok.com/@boutique_alexastore.sd",
    img: imgAlexa
  },
  {
    nombre: "For Baby's",
    descripcion: "Encuentra ropa adorable para niños de todas las edades, desde recién nacidos hasta 16 años. ¡Calidad y comodidad garantizadas!",
    url: "https://www.tiktok.com/@forbabys_sd",
    img: imgForbaby
  },
  {
    nombre: "Fercho's Style",
    descripcion: "Ropa moderna y accesorios para hombres que buscan estilo y personalidad. ¡Visita la página y marca tendencia!",
    url: "https://www.tiktok.com/@ferchosstyle",
    img: iconoTiktok
  },
  {
    nombre: "Fashion Boutiqu3",
    descripcion: "Lotes premium para emprendedores: blusas, leggings, playeras y mucho más. ¡Haz crecer tu negocio con estilo!",
    url: "https://www.tiktok.com/@fashion_boutiqu3",
    img: iconoTiktok
  },
];

const Admin = () => (
  <section style={{ padding: '3rem 1rem', background: colors.background, minHeight: '100vh' }}>
    <h3 style={{
      textAlign: 'center',
      margin: '0 0 2.5rem 0',
      fontWeight: 900,
      fontSize: '1.4rem',
      color: colors.primary,
      letterSpacing: '0.5px'
    }}>
      Nuestras Páginas Hermanas
    </h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.8rem',
      maxWidth: '1100px',
      margin: '0 auto',
      justifyContent: 'center',
    }}>
      {hermanaPages.map((hermana) => (
        <div key={hermana.nombre} style={{
          background: colors.white,
          borderRadius: '18px',
          boxShadow: `0 6px 20px ${colors.shadow}`,
          padding: '2rem 1rem',
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 28px ${colors.shadow}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 6px 20px ${colors.shadow}`; }}
        >
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 1.2rem auto',
            border: `3px solid ${colors.accent}`,
            background: colors.white
          }}>
            <img src={hermana.img} alt={hermana.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <h4 style={{
            color: colors.primary,
            fontWeight: 900,
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
            letterSpacing: '0.5px'
          }}>{hermana.nombre}</h4>

          <p style={{
            color: colors.secondary,
            fontSize: '0.95rem',
            lineHeight: 1.5,
            marginBottom: '1.5rem'
          }}>{hermana.descripcion}</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.1rem' }}>
            <a href={hermana.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={iconoTiktok} alt="TikTok" style={{ width: 28, height: 28, objectFit: 'contain', marginRight: 2 }} />
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={iconoInstagram} alt="Instagram" style={{ width: 28, height: 28, objectFit: 'contain', marginRight: 2, opacity: 0.6, cursor: 'not-allowed' }} />
            </a>
          </div>
        </div>
      ))}
    </div>

  </section>
);

export default Admin;
