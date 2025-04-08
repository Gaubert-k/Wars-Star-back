const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');
const { body, validationResult } = require('express-validator');

// Validation rules
const validateFriend = [
    body('phone_user')
      .isLength({ min: 10, max: 10 })
      .withMessage('User phone must be exactly 10 digits')
      .isNumeric()
      .withMessage('User phone must contain only numbers'),
  
    body('phone_friend')
      .isLength({ min: 10, max: 10 })
      .withMessage('Friend phone must be exactly 10 digits')
      .isNumeric()
      .withMessage('Friend phone must contain only numbers'),
  ];

// GET all friendships
router.get('/', async (req, res) => {
  const friends = await Friend.find();
  res.json(friends);
});

// GET one friend relation by ID
router.get('/:id', async (req, res) => {
  const friend = await Friend.findById(req.params.id).populate('messages');
  if (!friend) return res.status(404).json({ error: 'Friendship not found' });
  res.json(friend);
});

// POST /api/friends
router.post('/', validateFriend, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  
    try {
      const newFriend = new Friend(req.body);
      await newFriend.save();
      res.status(201).json(newFriend);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create friendship' });
    }
  });

// PUT update friendship
router.put('/:id', async (req, res) => {
  const updated = await Friend.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'Friendship not found' });
  res.json(updated);
});

// DELETE friendship
router.delete('/:id', async (req, res) => {
  const deleted = await Friend.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Friendship not found' });
  res.json({ message: 'Friendship deleted' });
});

module.exports = router;
