import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import pacasRouter from './routes/pacas.js';
import productosRouter from './routes/productos.js';
import { initializeDatabase } from './initDb.js';

// Configure Express
const app = express();
app.use(cors());
app.use(express.json());

// Agregar endpoint de health check para servicios de hosting
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Configure __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API Routes
app.use('/api/pacas', pacasRouter);
app.use('/api/productos', productosRouter);

// Health check endpoint para Railway
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Simple error handling for API routes
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Dynamic port for Railway
const PORT = process.env.PORT || 5000;

// Inicializar la base de datos y luego iniciar el servidor
initializeDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Error al inicializar la aplicación:', err);
    // Iniciar el servidor de todos modos
    app.listen(PORT, () => console.log(`API server running on port ${PORT} (sin inicialización de BD)`));
  });
