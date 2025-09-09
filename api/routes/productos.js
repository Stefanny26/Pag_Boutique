import { Router } from 'express';
import Producto from '../models/producto.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const productos = await Producto.getAll();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos', details: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const producto = await Producto.getById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: 'Error al obtener producto', details: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('Datos recibidos para crear producto:', req.body);
    const nuevo = await Producto.create(req.body);
    console.log('Producto creado:', nuevo);
    res.status(201).json(nuevo);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error al crear producto', details: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Actualizando producto ID ${req.params.id}:`, req.body);
    const actualizado = await Producto.update(req.params.id, req.body);
    if (!actualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    console.log('Producto actualizado:', actualizado);
    res.json(actualizado);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar producto', details: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Producto.delete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar producto', details: error.message });
  }
});

export default router;
