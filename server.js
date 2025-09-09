import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Agregar endpoint de health check para servicios de hosting
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Servir frontend desde dist
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint para Railway
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Enviar index.html para rutas del frontend (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

// Puerto dinámico para Railway
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
