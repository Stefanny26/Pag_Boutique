

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Pacas from './pages/Pacas.jsx';
import Boutique from './pages/Boutique.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from './pages/Contacto.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '70vh', background: '#ecf3fe' }}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/pacas' element={<Pacas />} />
          <Route path='/boutique' element={<Boutique />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
