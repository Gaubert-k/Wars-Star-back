const friendService = require('../services/friendService');
const User = require('../models/User');
const Friend = require('../models/Friend');

// POST /api/friends
exports.addFriend = async (req, res) => {
  try {
    const { phone_user, phone_friend } = req.body;

    if (!phone_user || !phone_friend) {
      return res.status(400).json({ error: 'phone_user and phone_friend are required' });
    }

    // Check if friendship already exists
    const existingFriend = await Friend.findOne({ phone_user, phone_friend });
    if (existingFriend) {
      return res.status(400).json({ error: 'Friend already exists' });
    }

    // Get friend's name from User collection
    const friendUser = await User.findOne({ phone: phone_friend });
    if (!friendUser) {
      return res.status(404).json({ error: 'Friend user not found in User collection' });
    }

    const newFriend = await friendService.addFriend({
      phone_user,
      phone_friend,
      first_name: friendUser.first_name,
      last_name: friendUser.last_name
    });

    res.status(201).json(newFriend);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add friend' });
  }
};

// GET /api/friends/:phone_user
exports.getFriends = async (req, res) => {
  try {
    const friends = await friendService.getFriendsOfUser(req.params.phone_user);

    if (!friends || friends.length === 0) {
      return res.status(404).json({ error: 'No friends found' });
    }

    res.json(friends);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch friends' });
  }
};

// DELETE /api/friends/:id
exports.deleteFriend = async (req, res) => {
  try {
    const deleted = await friendService.deleteFriend(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Friend not found' });
    res.json({ message: 'Friend deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete friend' });
  }
};
