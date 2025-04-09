const Message = require('../models/Message');

// Send a message
const sendMessage = async (data) => {
  return await Message.create(data);
};

// Get messages from a sender
const getMessagesBySender = async (sender) => {
  return await Message.find({ sender }).sort({ time: -1 });
};

module.exports = {
  sendMessage,
  getMessagesBySender,
};
