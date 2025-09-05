
import React from 'react';
import { colors } from '../styles/colors';
import localImg from '../assets/Local.jpeg';
import fachadaImg from '../assets/Fachada.jpeg';
import variasImg from '../assets/varias.jpeg';


const Nosotros = () => (
  <section style={{ background: colors.background, padding: '3rem 0' }}>
    <h2 style={{
      textAlign: 'center',
      color: colors.primary,
      fontWeight: 900,
      fontSize: '2.2rem',
      marginBottom: '2.5rem',
      letterSpacing: '-1px'
    }}>
      Nuestra Historia
    </h2>

    {/* Historia y fachada */}
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2.5rem',
        maxWidth: '1200px',
        margin: '0 auto 3rem auto',
        alignItems: 'stretch',
        flexDirection: 'row',
      }}
    >
      <div style={{
        flex: '1 1 420px',
        minWidth: '320px',
        background: colors.white,
        borderRadius: '16px',
        boxShadow: `0 2px 8px ${colors.shadow}`,
        padding: '2.2rem 2rem',
        color: colors.secondary,
        fontSize: '1.18rem',
        lineHeight: '1.8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <p style={{ color: colors.primary, fontWeight: 700, fontSize: '1.32rem', marginBottom: '1.1rem' }}>
          Más de 10 años de esfuerzo, sueños y crecimiento.
        </p>
        <p>
          Nuestra historia comenzó hace más de una década, vendiendo ropa americana desde la sala de nuestro hogar. Con mucha dedicación, la bendición de Dios y el deseo de salir adelante, fuimos creciendo hasta cumplir uno de nuestros grandes sueños: tener nuestro propio local físico en Santo Domingo.
        </p>
        <p>
          Al principio solo vendíamos prenda por prenda, pero con el tiempo logramos dar un paso más: empezamos a realizar envíos a diferentes ciudades y nos expandimos como distribuidores de pacas <strong>Premium</strong>.
        </p>
        <p style={{ marginTop: '1.2rem', color: colors.accent, fontWeight: 700, fontSize: '1.13rem' }}>
          Nuestra misión es servir con honestidad y dedicación a cada familia, ofreciendo ropa y pacas de calidad a precios justos, y con atención personalizada. Buscamos aportar valor a nuestros clientes, siendo ejemplo de honradez, esfuerzo y cercanía en cada paso del negocio.
        </p>
      </div>
      <div style={{ flex: '1 1 380px', minWidth: '280px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={fachadaImg}
          alt="Fachada del local"
          style={{
            width: '100%',
            maxWidth: '380px',
            borderRadius: '18px',
            boxShadow: `0 4px 18px ${colors.shadow}`,
            objectFit: 'cover',
          }}
        />
      </div>
    </div>

    {/* Interior y visión */}
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2.5rem',
        maxWidth: '1200px',
        margin: '0 auto 3rem auto',
        alignItems: 'stretch',
        flexDirection: 'row-reverse',
      }}
    >
      <div style={{ flex: '1 1 420px', minWidth: '320px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={localImg}
          alt="Interior del local"
          style={{
            width: '100%',
            maxWidth: '420px',
            borderRadius: '18px',
            boxShadow: `0 4px 18px ${colors.shadow}`,
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={{
        flex: '1 1 420px',
        minWidth: '320px',
        background: colors.white,
        borderRadius: '16px',
        boxShadow: `0 2px 8px ${colors.shadow}`,
        padding: '2.2rem 2rem',
        color: colors.secondary,
        fontSize: '1.18rem',
        lineHeight: '1.8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <p>
          Sabemos que no ha sido fácil; hemos enfrentado altos y bajos como cualquier negocio, pero siempre con la bendición de Dios, el apoyo de nuestra familia y la fuerza para seguir adelante.
        </p>
        <p>
          Hoy seguimos trabajando con la misma pasión, ofreciendo pacas de calidad <strong>Premium</strong> para que nuestras clientas encuentren ropa de excelente calidad a precios justos.
        </p>
        <p style={{ marginTop: '1.2rem', color: colors.accent, fontWeight: 700, fontSize: '1.13rem' }}>
          Nuestra visión es ser reconocidos como la boutique y distribuidora de pacas más confiable de la región, creciendo siempre con integridad, servicio y compromiso, y llevando oportunidades a más familias ecuatorianas, siempre bajo la guía y bendición de Dios.
        </p>
        <p style={{ fontWeight: 'bold', color: colors.primary, marginTop: '1.1rem', fontSize: '1.18rem' }}>
          Gracias por ser parte de esta historia. Cada compra tuya nos ayuda a seguir creciendo y cumpliendo sueños.
        </p>
      </div>
    </div>
  {/* Imagen adicional varias */}
    <div style={{ maxWidth: '1200px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
      <img
        src={variasImg}
        alt="Clientes y variedad"
        style={{
          width: '100%',
          maxWidth: '900px',
          borderRadius: '18px',
          boxShadow: `0 4px 18px ${colors.shadow}`,
          objectFit: 'cover',
        }}
      />
    </div>

  </section>
);

export default Nosotros;
