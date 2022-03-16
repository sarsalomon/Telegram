const Router = require('express');
const messageController = require('../controllers/messageController');
const router = new Router();

router.post('/get', messageController.fetchMessages);
router.post('/send', messageController.sendMessage);


module.exports = router;