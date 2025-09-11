import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import multer from 'multer';
import fs from 'fs';
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

// Crear directorio uploads si no existe
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configurar multer para subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Generar nombre único para el archivo
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB límite
  },
  fileFilter: function (req, file, cb) {
    // Aceptar solo imágenes
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos de imagen'));
    }
  }
});

// Servir archivos estáticos de uploads
app.use('/uploads', express.static(uploadsDir));

// Endpoint para subir imágenes
app.post('/api/upload', upload.single('imagen'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se recibió ningún archivo' });
    }

    // Construir la URL del archivo
    const fileUrl = `/uploads/${req.file.filename}`;
    
    console.log('Archivo subido:', req.file.filename);
    console.log('URL generada:', fileUrl);
    
    res.json({ 
      url: fileUrl,
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size
    });
  } catch (error) {
    console.error('Error en upload:', error);
    res.status(500).json({ error: 'Error al subir el archivo' });
  }
});

// API Routes
app.use('/api/pacas', pacasRouter);
app.use('/api/productos', productosRouter);

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
