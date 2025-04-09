const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friendController');

router.post('/', friendController.addFriend);
router.get('/:phone_user', friendController.getFriends);
router.delete('/:id', friendController.deleteFriend);

module.exports = router;
