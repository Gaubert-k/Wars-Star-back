const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages
router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// GET single message
router.get('/:id', async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (!message) return res.status(404).json({ error: 'Message not found' });
  res.json(message);
});

// POST new message
router.post('/', async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.status(201).json(message);
});

// PUT update message
router.put('/:id', async (req, res) => {
  const updated = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'Message not found' });
  res.json(updated);
});

// DELETE message
router.delete('/:id', async (req, res) => {
  const deleted = await Message.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Message not found' });
  res.json({ message: 'Message deleted' });
});

module.exports = router;
