const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Configuración de multer para subir archivos a /uploads
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, 'uploads'));
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		const name = file.fieldname + '-' + Date.now() + ext;
		cb(null, name);
	}
});
const upload = multer({ storage });

// Endpoint para subir imágenes
app.post('/api/upload', upload.single('imagen'), (req, res) => {
	if (!req.file) return res.status(400).json({ error: 'No se subió archivo' });
	const url = `/uploads/${req.file.filename}`;
	res.json({ url });
});

// Servir archivos estáticos de /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/pacas', require('./routes/pacas'));
app.use('/api/productos', require('./routes/productos'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('API corriendo en puerto', PORT));
