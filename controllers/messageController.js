const messageService = require('../services/messageService');

// POST /api/messages
exports.sendMessage = async (req, res) => {
  try {
    const {message, sender} = req.body;

    const newMessage = await messageService.sendMessage({message, sender});
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
