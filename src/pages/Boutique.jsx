
import React, { useState, useEffect } from 'react';
import { colors } from '../styles/colors';

const CATEGORIAS = [
  { nombre: 'Ropa', tipos: ['Ropa', 'Vestido', 'Blusa', 'Pantalón', 'Falda', 'Short', 'Conjunto', 'Chaqueta', 'Abrigo', 'Camisa', 'Playera', 'Sudadera'] },
  { nombre: 'Calzado', tipos: ['Calzado', 'Zapato', 'Sandalia', 'Tenis', 'Botas', 'Zapatilla'] },
  { nombre: 'Accesorios', tipos: ['Accesorio', 'Lazo', 'Cinturón', 'Pulsera', 'Collar', 'Aretes', 'Diadema', 'Gafas'] },
  { nombre: 'Sombreros', tipos: ['Sombrero', 'Gorra', 'Boina', 'Visera'] },
  { nombre: 'Carteras', tipos: ['Cartera', 'Bolso', 'Mochila', 'Billetera'] },
];

const Boutique = () => {
  const [categoria, setCategoria] = useState('Ropa');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
  const API = import.meta.env.VITE_API_URL || '';
  fetch(`${API}/api/productos`)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar los productos');
        setLoading(false);
      });
  }, []);

  const productosFiltrados = productos.filter(
    p => CATEGORIAS.find(cat => cat.nombre === categoria).tipos.map(t => t.toLowerCase()).includes((p.tipo || '').toLowerCase())
  );

  const Card = ({ prod }) => {
    const mensaje = `Hola! Quiero comprar este producto de la boutique:%0A%0A` +
      `Nombre: ${prod.nombre}%0A` +
      `Tipo: ${prod.tipo}%0A` +
      `Talla: ${prod.talla}%0A` +
      `Precio: $${prod.precio}`;
    return (
      <div style={{
        background: colors.white,
        borderRadius: '0',
        boxShadow: 'none',
        padding: '0',
        width: '100%',
        maxWidth: '210px',
        textAlign: 'center',
        border: 'none',
        margin: '0 auto 2.2rem auto',
      }}>
        <img src={prod.imagen || '/src/assets/react.svg'} alt={prod.nombre} style={{ width: '100%', height: '170px', objectFit: 'contain', background: '#fff', marginBottom: '1.1rem' }} />
        <div style={{ marginBottom: '0.6rem', fontWeight: 600, color: colors.primary, fontSize: '1rem' }}>{prod.nombre}</div>
        <div style={{ color: colors.secondary, fontSize: '0.98rem', marginBottom: '0.15rem' }}>Talla: {prod.talla}</div>
        <div style={{ color: colors.secondary, fontSize: '0.98rem', marginBottom: '0.15rem' }}>Tipo: {prod.tipo}</div>
        <div style={{ color: colors.primary, fontWeight: 700, fontSize: '1.05rem', marginBottom: '1rem' }}>${prod.precio}</div>
        <a
          href={`https://wa.me/593985668130?text=${mensaje}`}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            border: `1.5px solid ${colors.primary}`,
            color: colors.primary,
            background: 'transparent',
            padding: '0.6rem 0',
            borderRadius: '0',
            textDecoration: 'none',
            display: 'block',
            fontWeight: 600,
            fontSize: '0.98rem',
            width: '100%',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => { e.target.style.background = colors.primary; e.target.style.color = colors.white; }}
          onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = colors.primary; }}
        >
          Agregar al carrito
        </a>
      </div>
    );
  };

  return (
    <section style={{ background: colors.white, minHeight: '100vh', padding: 0 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'flex-start', padding: '2.5rem 1.5rem 2.5rem 1.5rem' }}>
        {/* Filtros laterales */}
        <aside style={{ minWidth: '220px', maxWidth: '260px', marginRight: '2.5rem', borderRight: `1.5px solid ${colors.background}`, paddingRight: '2rem' }}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', color: colors.primary, marginBottom: '2.2rem', letterSpacing: '-1px' }}>Comprar por</div>
          {CATEGORIAS.map(cat => (
            <div key={cat.nombre} style={{ marginBottom: '1.5rem', borderBottom: `1px solid ${colors.background}`, paddingBottom: '1.1rem' }}>
              <button
                onClick={() => setCategoria(cat.nombre)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: categoria === cat.nombre ? colors.accent : colors.primary,
                  fontWeight: categoria === cat.nombre ? 900 : 600,
                  fontSize: '1.08rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  padding: 0,
                  outline: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {cat.nombre}
              </button>
            </div>
          ))}
        </aside>
        {/* Catálogo */}
        <main style={{ flex: 1, paddingLeft: 0 }}>
          <h2 style={{ textAlign: 'left', color: colors.primary, fontWeight: 900, fontSize: '2rem', marginBottom: '2.5rem', letterSpacing: '-1px' }}>
            Colección
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.2rem 1.2rem',
            alignItems: 'start',
          }}>
            {loading ? (
              <div style={{ color: colors.secondary, fontSize: '1.1rem', padding: '2rem' }}>Cargando productos...</div>
            ) : error ? (
              <div style={{ color: 'red', fontSize: '1.1rem', padding: '2rem' }}>{error}</div>
            ) : (
              productosFiltrados.map((prod, idx) => <Card prod={prod} key={prod.id || idx} />)
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Boutique;
