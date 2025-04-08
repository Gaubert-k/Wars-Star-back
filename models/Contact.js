// This code defines a Mongoose schema for a contact, which includes a name and phone number. 
// The schema is then exported as a model named 'Contact'. 
// The timestamps option adds createdAt and updatedAt fields to the document automatically.

const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }},{timestamps: true}
);

module.exports = mongoose.model('Contact', ContactSchema);
  