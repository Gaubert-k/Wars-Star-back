const { validationResult } = require('express-validator');
const userService = require('../services/userService');

exports.getUserByPhone = async (req, res) => {
    console.log(" getUserByPhone", req.params.phone);
    try {
        const user = await userService.getUserByPhone(req.params.phone);

        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

exports.updateUser = async (req, res) => {
  const updated = await userService.updateUser(req.params.phone, req.body);
  if (!updated) return res.status(404).json({ error: 'User not found' });
  res.json(updated);
};

exports.deleteUser = async (req, res) => {
  const deleted = await userService.deleteUser(req.params.phone);
  if (!deleted) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'User deleted' });
};
