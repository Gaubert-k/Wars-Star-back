const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
  phone_user: { type: String, required: true },      // references User.phone
  phone_friend: { type: String, required: true },    // references User.phone
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
}, { timestamps: true });

module.exports = mongoose.model('Friend', FriendSchema);
