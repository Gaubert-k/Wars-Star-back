const Friend = require('../models/Friend');

// Add a friend relation
const addFriend = async (data) => {
  return await Friend.create(data);
};

// Get all friends of a user
const getFriendsOfUser = async (phone_user) => {
  return await Friend.find({ phone_user });
};

// Delete a friend by ID
const deleteFriend = async (id) => {
  return await Friend.findByIdAndDelete(id);
};

module.exports = {
  addFriend,
  getFriendsOfUser,
  deleteFriend,
};
