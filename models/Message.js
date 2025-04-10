const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  sender: { type: String, required: true }, // User.phone 
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
