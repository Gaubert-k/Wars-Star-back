const User = require('../models/User');

// Create a new user
const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// Get all users
const getAllUsers = async () => {
  return await User.find();
};

// Update a user by phone number
const updateUser = async (phone, updateData) => {
  return await User.findOneAndUpdate({ phone }, updateData, { new: true });
};

// Delete a user by phone number
const deleteUser = async (phone) => {
  return await User.findOneAndDelete({ phone });
};

// Export all service functions
module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
