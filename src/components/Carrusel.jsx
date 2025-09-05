import React from 'react';
import { colors } from '../styles/colors';

const Carrusel = () => {
  // Ejemplo de imágenes, puedes agregar más en assets y cambiar los nombres
  const imagenes = [
    '/src/assets/react.svg',
    '/src/assets/example1.jpg',
    '/src/assets/example2.jpg',
  ];
  const [actual, setActual] = React.useState(0);

  // Avance automático cada 3.5 segundos
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % imagenes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [imagenes.length]);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '220px',
        height: '38vw',
        maxHeight: '420px',
        overflow: 'hidden',
        background: colors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 2px 10px ${colors.shadow}`,
        zIndex: 2,
      }}
    >
      <img
        src={imagenes[actual]}
        alt='Carrusel'
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 0,
          transition: 'opacity 0.7s',
        }}
      />
    </div>
  );
};

export default Carrusel;
