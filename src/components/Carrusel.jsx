import React from 'react';
import { colors } from '../styles/colors';
import img1 from '../assets/MixtaMujer.jpeg';
import img2 from '../assets/SantexC.jpeg';
import img3 from '../assets/varias.jpeg';

const slides = [
  { img: img1, title: 'Pacas Leon', desc: 'Prendas seleccionadas, listas para vender y triunfar.' },
  { img: img2, title: 'Pacas Santex', desc: 'Calidad y variedad en ropa americana premium.' },
  { img: img3, title: 'Pacas Givenchy', desc: 'Moda exclusiva y marcas reconocidas para tu negocio.' },
];

const Carrusel = () => {
  const [actual, setActual] = React.useState(0);
  const total = slides.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => setActual(idx);
  const prev = () => setActual((actual - 1 + total) % total);
  const next = () => setActual((actual + 1) % total);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '12px', boxShadow: `0 4px 20px ${colors.shadow}` }}>
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            display: idx === actual ? 'block' : 'none',
            width: '100%',
            transition: 'opacity 0.5s',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            style={{
              width: '100%',
              maxHeight: '420px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            maxWidth: '90%',
          }}>
            <h5 style={{ margin: 0 }}>{slide.title}</h5>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Indicadores */}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              border: 'none',
              background: idx === actual ? colors.accent : '#ccc',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
