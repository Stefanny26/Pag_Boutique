import express from 'express';
import path from 'path';
import cors from 'cors';
import pacasRouter from './api/routes/pacas.js';
import productosRouter from './api/routes/productos.js';

const app = express();
app.use(cors());
app.use(express.json());

// Servir frontend
app.use(express.static(path.join('dist')));

// Rutas API
app.use('/api/pacas', pacasRouter);
app.use('/api/productos', productosRouter);

// Enviar index.html para rutas no encontradas
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
