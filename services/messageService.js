const Message = require('../models/Message');

// Message service to handle message-related operations
const sendMessage = async (data) => {
  return await Message.create({ // create a new message in the database
    message: data.message, // message text
    sender: data.sender, // sender's phone number
    time: data.time, // timestamp of the message
  });
};

// Get messages from a sender
const getMessagesBySender = async (sender) => {
  return await Message.find({ sender }).sort({ time: -1 }); // find messages by sender and sort them by time in descending order
};

module.exports = {
  sendMessage,
  getMessagesBySender,
};
