const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
  phone_user: { type: String, required: true },      
  phone_friend: { type: String, required: true },    
  first_name: { type: String, required: true },        // Friend's first name
  last_name: { type: String, required: true }, 
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
}, { timestamps: true });

module.exports = mongoose.model('Friend', FriendSchema);
