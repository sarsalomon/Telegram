const Router = require('express');
const chatController = require('../controllers/chatController');
const router = new Router();

router.post('/', chatController.fetchChats);
router.post('/createroom', chatController.createChat);
router.post('/search', chatController.searchChat);
router.post('/get', chatController.getChat);



module.exports = router;