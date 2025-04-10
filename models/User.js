const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  last_name: String,
  first_name: String,
  logo: String
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
