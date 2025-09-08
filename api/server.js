const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/pacas', require('./routes/pacas'));
app.use('/api/productos', require('./routes/productos'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('API corriendo en puerto', PORT));
