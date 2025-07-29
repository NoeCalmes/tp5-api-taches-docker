const express = require('express');
const router = express.Router();
const { Task } = require('../models/task');

// CREATE
router.post('/', async (req, res) => {
  console.log('BODY REÇU :', req.body); // Ajoute cette ligne
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// READ ONE
router.get('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.update(req.body);
  res.json(task);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.destroy();
  res.status(204).send();
});

module.exports = router;
