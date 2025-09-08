const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

router.get('/', async (req, res) => {
  const productos = await Producto.getAll();
  res.json(productos);
});

router.get('/:id', async (req, res) => {
  const producto = await Producto.getById(req.params.id);
  res.json(producto);
});

router.post('/', async (req, res) => {
  const nuevo = await Producto.create(req.body);
  res.json(nuevo);
});

router.put('/:id', async (req, res) => {
  const actualizado = await Producto.update(req.params.id, req.body);
  res.json(actualizado);
});

router.delete('/:id', async (req, res) => {
  await Producto.delete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
