import { Router } from 'express';
import Paca from '../models/paca.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const pacas = await Paca.getAll();
    res.json(pacas);
  } catch (error) {
    console.error('Error al obtener pacas:', error);
    res.status(500).json({ error: 'Error al obtener pacas', details: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const paca = await Paca.getById(req.params.id);
    if (!paca) {
      return res.status(404).json({ error: 'Paca no encontrada' });
    }
    res.json(paca);
  } catch (error) {
    console.error('Error al obtener paca:', error);
    res.status(500).json({ error: 'Error al obtener paca', details: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('Datos recibidos para crear paca:', req.body);
    const nueva = await Paca.create(req.body);
    console.log('Paca creada:', nueva);
    res.status(201).json(nueva);
  } catch (error) {
    console.error('Error al crear paca:', error);
    res.status(500).json({ error: 'Error al crear paca', details: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log(`Actualizando paca ID ${req.params.id}:`, req.body);
    const actualizada = await Paca.update(req.params.id, req.body);
    if (!actualizada) {
      return res.status(404).json({ error: 'Paca no encontrada' });
    }
    console.log('Paca actualizada:', actualizada);
    res.json(actualizada);
  } catch (error) {
    console.error('Error al actualizar paca:', error);
    res.status(500).json({ error: 'Error al actualizar paca', details: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Paca.delete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar paca:', error);
    res.status(500).json({ error: 'Error al eliminar paca', details: error.message });
  }
});

export default router;
