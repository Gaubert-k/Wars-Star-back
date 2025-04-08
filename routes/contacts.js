const express = require ('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts); 
});

router.post('/', async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;