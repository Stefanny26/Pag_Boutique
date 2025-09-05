import React from 'react';

const Admin = () => (
  <section style={{ padding: '2rem', background: '#fefefe' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Panel de Administración</h2>
    <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px #e8f5fe', padding: '2rem', textAlign: 'center' }}>
      <p>Esta sección es exclusiva para el administrador. Aquí podrás gestionar productos, imágenes y datos de la boutique y pacas.</p>
      <p><em>(Funcionalidad a personalizar según tus necesidades)</em></p>
    </div>
  </section>
);

export default Admin;
