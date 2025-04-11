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
    const identifier = req.params.sender; // ou autre nom de paramètre
    const messagesBySender = await messageService.getMessagesBySender(identifier);
    const messagesByReceiver = await messageService.getMessagesByReceiver(identifier);

    // Fusion des deux listes
    const messages = [...messagesBySender, ...messagesByReceiver];

    // Tri éventuel si vous avez un champ “time” ou équivalent
    messages.sort((a, b) => b.time - a.time);

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};