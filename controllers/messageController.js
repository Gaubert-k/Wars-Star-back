const messageService = require('../services/messageService');

// POST /api/messages
exports.sendMessage = async (req, res) => {
  try {
    console.log(" sendMessage", req.body);
    const {message, sender, receiver} = req.body;
    console.log(" sendMessage", message, sender, receiver);
    await messageService.sendMessage({message, sender, receiver});
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
