const messageService = require('../services/messageService');
const User = require('../models/User');

// POST /api/messages
exports.sendMessage = async (req, res) => {
  try {
    const {message, sender} = req.body;
   // Find sender's information 
     const senderUser = await User.findOne({ phone: sender });
    if (!senderUser) return res.status(404).json({ error: 'Sender not found' });

    const newMessage = await messageService.sendMessage({
      message: message,
      sender: sender,
      first_name: senderUser.first_name,
      last_name: senderUser.last_name,
      time: new Date(),
    });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

// GET /api/messages/:sender
exports.getMessages = async (req, res) => {
  try {
    const sender  = req.params.sender; 
    const messages = await messageService.getMessagesBySender(sender);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
