const Message = require('../models/Message');

// here we define the service functions to interact with the Message model to perform CRUD operations on messages 
// and export them for use in the controller 
const sendMessage = async (data) => {
  return await Message.create({ // create a new message in the database
    message: data.message, // message text
    sender: data.sender, // sender's phone number
    first_name: data.first_name, // sender's first name
    last_name: data.last_name, // sender's last name
    time: data.time, // timestamp of the message
  });
};

// Get messages from a sender
const getMessagesBySender = async (sender) => {
  return await Message.find({ sender }).sort({ time: -1 }); // 
};

module.exports = {
  sendMessage,
  getMessagesBySender,
};
