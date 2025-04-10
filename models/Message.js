const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  sender: { type: String, required: true }, // User.phone 
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
