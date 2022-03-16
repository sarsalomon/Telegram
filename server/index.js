require('dotenv').config();
const express       = require('express');
const sequelize     = require('./models/db')
const models        = require('./models/models')
const cors          = require('cors')
const router        = require('./routes/index')
const errorHandler  = require('./middleware/ErrorHandlingMiddleware');
const path          = require('path');
const fileUpload    = require('express-fileupload');
// const ws            = require('ws')

const PORT = process.env.PORT || 4000

const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server:server });

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)

app.get('/', (req,res) =>{
    res.status(200).json({message: 'Server Working'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        // wss.on('connection', function connection(ws) {
        //     let userID = getUniqueID();
        //     console.log('connected: ' + userID)
        //     console.log(userID)
        //     ws.on('message', function (message) {
        //         message = JSON.parse(message)
        //         switch (message.event) {
        //             case 'message':
        //                 broadcastMessage(message,userID)
        //                 break;
        //             case 'connection':
        //                 broadcastMessage(message, userID)
        //                 break;
        //         }
        //     })
        // })
        const server = app.listen(
            PORT,
            console.log(`Server running on PORT ${PORT}...`)
          );
        const io = require("socket.io")(server, {
            pingTimeout: 60000,
            cors: {
              origin: "http://localhost:3000",
              // credentials: true,
            },
        });
        io.on("connection", (socket) => {
          console.log("Connected to socket.io");

          socket.on("setup", (userData) => {
            socket.join(userData);
            console.log("User id: " + userData);
            socket.emit("connected");
          });

          socket.on("join chat", (room) => {
            socket.join(room);
            console.log("User Joined Room: " + room);
          });

          socket.on("new message", (newMessageRecieved) => {
            let chat = newMessageRecieved[1];
            if (!chat) return console.log("chat.users not defined");
            newMessageRecieved[2].forEach((user) => {
              console.log(newMessageRecieved[2][0])
              console.log(newMessageRecieved[2][1])
              if (newMessageRecieved[2][0] == (newMessageRecieved[2][1])) return;
              socket.in(newMessageRecieved[2][1]).emit("message recieved", newMessageRecieved);
            });
          });

          socket.off("setup", () => {
            console.log("USER DISCONNECTED");
            socket.leave(userData);
          });

        });  

      
    } catch (e){
        console.log(e)
    }
}
start()

// function broadcastMessage(message, id) {
//     wss.clients.forEach(client => {
//         client.send(JSON.stringify(message))
//     })
// }

// // Generates unique ID for every new connection
// const getUniqueID = () => {
//     const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     return s4() + s4() + '-' + s4();
// };