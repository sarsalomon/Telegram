const sequelize   = require('./db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    fish: {type: DataTypes.STRING}
})

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    content:  {type: DataTypes.STRING, allowNull: false},
    sender:  {type: DataTypes.STRING, allowNull: false},
    chat:  {type: DataTypes.STRING, allowNull: false},
    file:  {type: DataTypes.STRING, allowNull: true,}
})


const Chat = sequelize.define('chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    chatName: {type: DataTypes.STRING, allowNull: false},
    latestMessage: {type: DataTypes.STRING, allowNull: true},
    user: {type: DataTypes.STRING, allowNull: false},
    users: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    User, 
    Message,
    Chat
}