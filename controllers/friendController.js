const friendService = require('../services/friendService');

// POST /api/friends
exports.addFriend = async (req, res) => {
  try {
    const friend = await friendService.addFriend(req.body);
    res.status(201).json(friend);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add friend' });
  }
};

// GET /api/friends/:phone_user
exports.getFriends = async (req, res) => {
  try {
    const friends = await friendService.getFriendsOfUser(req.params.phone_user);
    res.json(friends);
  } catch (err) {
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
