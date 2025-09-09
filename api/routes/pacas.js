import { Router } from 'express';
import Paca from '../models/paca.js';

const router = Router();

router.get('/', async (req, res) => {
  const pacas = await Paca.getAll();
  res.json(pacas);
});

router.get('/:id', async (req, res) => {
  const paca = await Paca.getById(req.params.id);
  res.json(paca);
});

router.post('/', async (req, res) => {
  const nueva = await Paca.create(req.body);
  res.json(nueva);
});

router.put('/:id', async (req, res) => {
  const actualizada = await Paca.update(req.params.id, req.body);
  res.json(actualizada);
});

router.delete('/:id', async (req, res) => {
  await Paca.delete(req.params.id);
  res.json({ success: true });
});

export default router;
