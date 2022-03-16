const ApiError = require("../error/ApiError");
const { Message, User, Chat } = require("../models/models");

class chatController {
    async createChat(req, res, next){
        const { user, userId } = req.body;
        if (!userId) {
            return next(ApiError.badRequest('pusptq id'))
        }
        const chat = await Chat.findAndCountAll({where: {user:String(user), users:String(userId)}})
        const chatu = await Chat.findAndCountAll({where: {user:String(userId), users:String(user)}})
        if(chat.count>0 || chatu.count>0){
            return res.json(chat)
        }else{
            let chatData = {
                chatName: "sender",
                user: user,
                users: userId,
            }
            const createChat = await Chat.create(chatData)
            return res.json(createChat);
        }
    }

    async fetchChats(req, res, next){
        const { user } = req.body;
        const chats = await Chat.findAndCountAll({where: {user:String(user)}});
        if(chats.count==0){
            const chat = await Chat.findAndCountAll({where: {users:String(user)}});
            return res.json(chat);
        }else{
            return res.json(chats);
        }
    }

    async getChat(req, res, next){
        const {id} = req.body
        console.log(req.body)
        const getch = await Chat.findAndCountAll({where: {id:id}});
        console.log(getch)
        return res.json(getch);
    }
    
    async searchChat(req, res, next){
        const {name} = req.body
        const chats = await User.findAndCountAll({where: {fish:name}});
        return res.json(chats);
    }
}

module.exports = new chatController();