const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET single user by phone
router.get('/:phone', async (req, res) => {
  const user = await User.findOne({ phone: req.params.phone });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST new user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// PUT update user
router.put('/:phone', async (req, res) => {
  const updated = await User.findOneAndUpdate(
    { phone: req.params.phone },
    req.body,
    { new: true }
  );
  if (!updated) return res.status(404).json({ error: 'User not found' });
  res.json(updated);
});

// DELETE user
router.delete('/:phone', async (req, res) => {
  const deleted = await User.findOneAndDelete({ phone: req.params.phone });
  if (!deleted) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'User deleted' });
});

module.exports = router;
