import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import pacasRouter from './routes/pacas.js';
import productosRouter from './routes/productos.js';

// Configure Express
const app = express();
app.use(cors());
app.use(express.json());

// Configure __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API Routes
app.use('/api/pacas', pacasRouter);
app.use('/api/productos', productosRouter);

// Simple error handling for API routes
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Dynamic port for Railway
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
