const path = require("path");
const ApiError = require("../error/ApiError");
const { Message, Chat } = require("../models/models");

class messageController {
    async fetchMessages(req, res, next){
        const {user, userId} = req.body
        const chat = await Chat.findOne({where: {user:String(user), id:String(userId)}})
        if(chat==null){
            const chatu = await Chat.findOne({where: {users:String(user), id:String(userId)}})
            if(chatu.id > 0 && chatu.id != null){
                const messages = await Message.findAndCountAll({where: {chat:String(chatu.id)}})
                return res.json(messages);
            }
        }else{
            if(chat.id > 0 && chat.id != null){
                const messages = await Message.findAndCountAll({where: {chat:String(chat.id)}})
                return res.json(messages);
            }
        }
    }

    async sendMessage(req, res, next){
        const { content, chatId, user } = req.body;
        if(req.files){
            const {file} = req.files
            file.mv(path.resolve(__dirname, '..', 'static', file.name))
            let empc
            if(content == ''){
                empc = ''
            }else{
                empc = content
            }
            let newMessage = {
                sender: user,
                content: empc,
                chat: chatId,
                file: file.name
            }
            const message = await Message.create(newMessage)
            if(message){
                return res.json(message);
            }
        }else{
            if (!content) {
                return next(ApiError.badRequest("Pustos content"))
            }else if (!chatId){
                return next(ApiError.badRequest("chatr id content"))
            }
            let newMessage = {
                sender: user,
                content: content,
                chat: chatId
            }
            const message = await Message.create(newMessage)
            if(message){
                return res.json(message);
            }
        }

    }
}

module.exports = new messageController();