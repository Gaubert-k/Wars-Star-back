const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

// Validate phone number (French-style: 10 digits)
const validateUser = [
  body('phone')
    .isLength({ min: 10, max: 10 })
    .withMessage('Phone number must be exactly 10 digits')
    .isNumeric()
    .withMessage('Phone number must contain only numbers'),
  body('first_name').notEmpty().withMessage('First name is required'),
  body('last_name').notEmpty().withMessage('Last name is required'),
];

// Routes
router.get('/', userController.getUsers);
router.post('/', validateUser, userController.createUser);
router.put('/:phone', userController.updateUser);
router.delete('/:phone', userController.deleteUser);

module.exports = router;
