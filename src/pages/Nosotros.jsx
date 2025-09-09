
import React from 'react';
import { colors } from '../styles/colors';
import localImg from '../assets/Local.jpeg';
import variasImg from '../assets/varias.jpeg';


const Nosotros = () => {
  // Estilos para las nubes
  const cloudStyle = {
    background: colors.white,
    borderRadius: '60px',
    padding: '2.5rem 3rem',
    margin: '0 auto 3.5rem auto',
    position: 'relative',
    maxWidth: '1100px',
    boxShadow: `0 10px 25px ${colors.shadow}`,
    overflow: 'hidden',
  };
  
  // Estilos para los círculos que forman las nubes
  const cloudCircleStyle = (size, position) => ({
    content: '""',
    position: 'absolute',
    width: size,
    height: size,
    background: colors.white,
    borderRadius: '50%',
    ...position,
    zIndex: -1,
  });

  return (
    <section style={{ background: colors.background, padding: '3rem 1.5rem', minHeight: '100vh' }}>
      <h2 style={{
        textAlign: 'center',
        color: colors.primary,
        fontWeight: 900,
        fontSize: '2.4rem',
        marginBottom: '3rem',
        letterSpacing: '-1px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>
        Nuestra Historia de Fe y Familia
      </h2>

      {/* Primera nube - Historia */}
      <div style={{
        ...cloudStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}>
        {/* Círculos decorativos para formar la nube */}
        <div style={{...cloudCircleStyle('120px', { top: '-40px', left: '-30px' })}}></div>
        <div style={{...cloudCircleStyle('90px', { top: '-30px', left: '80px' })}}></div>
        <div style={{...cloudCircleStyle('100px', { top: '-50px', right: '100px' })}}></div>
        <div style={{...cloudCircleStyle('80px', { top: '-20px', right: '20px' })}}></div>
        <div style={{...cloudCircleStyle('110px', { bottom: '-40px', left: '100px' })}}></div>
        <div style={{...cloudCircleStyle('90px', { bottom: '-30px', right: '80px' })}}></div>
        
        <h3 style={{ color: colors.primary, fontWeight: 800, fontSize: '1.7rem', marginBottom: '1rem', textAlign: 'center' }}>
          Más de 10 años de esfuerzo, sueños y bendiciones
        </h3>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          <div style={{ 
            flex: '1 1 500px', 
            color: colors.secondary,
            fontSize: '1.18rem',
            lineHeight: '1.8',
          }}>
            <p>
              Nuestra historia comenzó hace más de una década, cuando junto a mi esposo, iniciamos vendiendo ropa americana desde la sala de nuestro hogar. Con mucha dedicación, la <strong>bendición de Dios</strong>, el amor de nuestra familia y el deseo de salir adelante, fuimos construyendo este sueño paso a paso.
            </p>
            <p style={{marginTop: '1rem'}}>
              Las primeras ventas fueron difíciles, pero juntos perseveramos. Mi esposo siempre ha sido mi apoyo incondicional, trabajando hombro con hombro para convertir este emprendimiento en lo que es hoy. Con el tiempo, y gracias a la fidelidad de nuestros clientes, pudimos cumplir uno de nuestros grandes sueños: tener nuestro propio local físico en Santo Domingo.
            </p>
            <p style={{marginTop: '1rem'}}>
              Al principio solo vendíamos prenda por prenda, pero con el tiempo dimos un paso más grande: comenzamos a realizar envíos a diferentes ciudades y nos expandimos como distribuidores de pacas <strong>Premium</strong>, llevando calidad y oportunidades a más familias ecuatorianas.
            </p>
          </div>
          <div style={{ 
            flex: '0 1 400px', 
            minWidth: '280px'
          }}>
            <img
              src={localImg}
              alt="Interior de nuestra boutique"
              style={{
                width: '100%',
                borderRadius: '30px',
                boxShadow: `0 12px 25px ${colors.shadow}`,
                transform: 'rotate(2deg)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Segunda nube - Misión */}
      <div style={{
        ...cloudStyle,
        background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.background} 100%)`,
      }}>
        {/* Círculos decorativos para formar la nube */}
        <div style={{...cloudCircleStyle('130px', { top: '-50px', left: '30%' })}}></div>
        <div style={{...cloudCircleStyle('100px', { top: '-30px', left: '50%' })}}></div>
        <div style={{...cloudCircleStyle('80px', { bottom: '-40px', left: '40%' })}}></div>
        <div style={{...cloudCircleStyle('90px', { bottom: '-20px', right: '30%' })}}></div>
        
        <h3 style={{ color: colors.primary, fontWeight: 800, fontSize: '1.7rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Nuestra Misión
        </h3>
        
        <div style={{ 
          color: colors.secondary,
          fontSize: '1.2rem',
          lineHeight: '1.8',
          padding: '1rem',
          textAlign: 'center',
          maxWidth: '850px',
          margin: '0 auto',
        }}>
          <p style={{fontStyle: 'italic', fontWeight: '500'}}>
            "Servir con honestidad, amor y dedicación a cada familia que nos visita, ofreciendo ropa y pacas de calidad a precios justos, y brindando una atención personalizada y cercana. Junto a mi esposo, buscamos aportar valor a nuestros clientes, siendo ejemplo de honradez, esfuerzo y calidez en cada etapa del negocio, guiados siempre por nuestra fe en Dios y el compromiso con las familias ecuatorianas."
          </p>
        </div>
      </div>

      {/* Tercera nube - Visión y Agradecimiento */}
      <div style={{
        ...cloudStyle,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}>
        {/* Círculos decorativos para formar la nube */}
        <div style={{...cloudCircleStyle('120px', { top: '-40px', right: '-30px' })}}></div>
        <div style={{...cloudCircleStyle('90px', { top: '-30px', right: '80px' })}}></div>
        <div style={{...cloudCircleStyle('100px', { top: '-50px', left: '100px' })}}></div>
        <div style={{...cloudCircleStyle('80px', { top: '-20px', left: '20px' })}}></div>
        <div style={{...cloudCircleStyle('110px', { bottom: '-40px', right: '100px' })}}></div>
        <div style={{...cloudCircleStyle('90px', { bottom: '-30px', left: '80px' })}}></div>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ 
            flex: '1 1 400px', 
            minWidth: '280px',
            order: 2
          }}>
            <img
              src={variasImg}
              alt="Pacas de calidad premium"
              style={{
                width: '100%',
                borderRadius: '30px',
                boxShadow: `0 12px 25px ${colors.shadow}`,
                transform: 'rotate(-2deg)',
              }}
            />
          </div>
          
          <div style={{ 
            flex: '1 1 500px', 
            color: colors.secondary,
            fontSize: '1.18rem',
            lineHeight: '1.8',
            order: 1
          }}>
            <h3 style={{ color: colors.primary, fontWeight: 800, fontSize: '1.7rem', marginBottom: '1.5rem' }}>
              Nuestra Visión
            </h3>
            <p>
              Sabemos que el camino no ha sido fácil; junto a mi esposo hemos enfrentado altos y bajos como cualquier negocio familiar, pero <strong>siempre con la bendición de Dios</strong>, el apoyo incondicional de nuestra familia y la fuerza para seguir adelante unidos.
            </p>
            <p style={{marginTop: '1rem'}}>
              Hoy seguimos trabajando con la misma pasión, ofreciendo pacas de calidad <strong>Premium</strong> para que nuestras clientas encuentren ropa de excelente calidad a precios justos.
            </p>
            <p style={{ marginTop: '1.2rem', color: colors.accent, fontWeight: 700, fontSize: '1.15rem' }}>
              "Nuestra visión es ser reconocidos como la boutique y distribuidora de pacas más confiable de la región, creciendo siempre con integridad, servicio y compromiso familiar, llevando oportunidades a más hogares ecuatorianos, siempre bajo la guía y bendición de Dios."
            </p>
            <p style={{ fontWeight: 'bold', color: colors.primary, marginTop: '1.5rem', fontSize: '1.2rem' }}>
              Gracias por ser parte de esta historia que construimos juntos, mi esposo y yo, con la bendición de Dios. Cada compra tuya nos ayuda a seguir creciendo y cumpliendo sueños en familia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
