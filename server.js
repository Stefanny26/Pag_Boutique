import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import pacasRouter from './api/routes/pacas.js';
import productosRouter from './api/routes/productos.js';

const app = express();
app.use(cors());
app.use(express.json());

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir frontend desde dist
app.use(express.static(path.join(__dirname, 'dist')));

// Rutas API
app.use('/api/pacas', pacasRouter);
app.use('/api/productos', productosRouter);

// Enviar index.html para rutas no encontradas (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Puerto dinámico para Railway
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
