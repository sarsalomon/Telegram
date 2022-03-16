const Router = require('express');
const router = new Router();

const messageRouter      = require('./messageRouter');
const chatRouter         = require('./chatRouter');
const userRouter         = require('./userRouter');

router.use('/message',messageRouter);
router.use('/chat',chatRouter);
router.use('/user',userRouter);

module.exports = router;