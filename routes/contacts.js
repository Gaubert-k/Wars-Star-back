const express = require ('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { body } = require('express-validator');

router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts); 
});

router.post('/',
    [
        body('name').isString().notEmpty().withMessage('Name is required'),
        body('phone').isString().notEmpty().withMessage('Phone number is required'),

    ],
     async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//PUT request to update a contact
router.put('/:id',
    [
        body('name').optional().notEmpty().withMessage('Name cannot be empty'),
        body('phone').optional().notEmpty().withMessage('Phone number cannot be empty'),
    ],
     async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        const updated = await Contact.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
//DELETE request to delete a contact
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Contact.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;