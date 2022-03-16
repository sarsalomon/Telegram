import React, { useContext, useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import {NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '..';
import { createChat, fetchChats, getChat, searchChat } from '../http/chatAPI';
import { observer } from 'mobx-react-lite';
import { fetchMessages, sendMessage } from '../http/messageAPI';

import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000"; // "https://talk-a-tive.herokuapp.com"; -> After deployment
let socket, selectedChatCompare;

const Chat = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [userids, setUserid] = useState('');
    const [content, setContent] = useState('');
    const [items, setItems] = useState([])
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])
    const [infoChat, setInfoChat] = useState('')
    const [getch, setGetch] = useState('')
    const [file, setFile] = useState(null)
    const [socketConnected, setSocketConnected] = useState(false);

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", user.userinfo);
        socket.on("connected", () => setSocketConnected(true));
    }, []);

    useEffect(() => {
        socket.on("message recieved", (newMessageRecieved) => {

            if (!selectedChatCompare || selectedChatCompare != newMessageRecieved[1]) {
                return alert(`${newMessageRecieved[2][0]} dan yangi xabar: ${newMessageRecieved[0]}`)
              } else {
                return fetchMessages(user.userinfo, Number(newMessageRecieved[1])).then(data => setMessages(data))
              }
        });
    });

    useEffect(() => {
        if(search === '' || search.length == 0 || search === ' '){
            fetchChats(user.userinfo).then(data => setChats(data))
        }else if(search.length > 0){
            searchChat(search).then(data => setItems(data));
        }
    }, [search,user.userinfo]);

    const actionF = (userId) =>{
        createChat(user.userinfo, userId)
    }

    const actionM = (userId) =>{
        selectedChatCompare = userId
        setUserid(userId)
        getChat(userId).then(data => setGetch(data))
        fetchMessages(user.userinfo, userId).then(data => setMessages(data))
        socket.emit("join chat", userId);
        setInfoChat(userId)
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const sendM = async () =>{
        let gch = user.userinfo
        let gchu = getch[0].user
        let ur
        if(gch != gchu){
            ur = getch[0].user
        }else{
            ur = getch[0].users
        }
            if(file!=null){
                const formData = new FormData()
                formData.append('content', content)
                formData.append('chatId', infoChat)
                formData.append('user', user.userinfo)
                formData.append('file', file)
                sendMessage(formData)
                fetchMessages(user.userinfo, userids).then(data => setMessages(data))
                socket.emit("new message", [content, infoChat, [user.userinfo, Number(ur)]]);
                setFile(null)
                setContent('')
            }else{
                const formData = new FormData()
                formData.append('content', content)
                formData.append('chatId', infoChat)
                formData.append('user', user.userinfo)
                formData.append('file', null)
                sendMessage(formData)
                fetchMessages(user.userinfo, userids).then(data => setMessages(data))
                socket.emit("new message", [content, infoChat, [user.userinfo, Number(ur)]]);
                setContent('') 
            }
    }


    let searchData
    if(items.length > 0){
        searchData = <div>
            {items.map(user =>
            <div key={user.id} 
            onClick={() => actionF(user.id)}>
                <div className="friend-drawer friend-drawer--onhover">
                    <img className="profile-image" src="https://icon-library.com/images/anonymous-icon/anonymous-icon-0.jpg" alt=""/>
                    <div className="text">
                        <h6>{user.fish}</h6>
                        <p className="text-muted">Hey, you're arrested!</p>
                    </div>
                    <span className="time text-muted small">1</span>
                </div>
                <hr/>
            </div>
            )}
        </div>
    }else{
        searchData = <div>
            {chats.map(user =>
            <div key={user.id}
            onClick={() => actionM(user.id)}>
                <div className="friend-drawer friend-drawer--onhover">
                    <img className="profile-image" src="https://icon-library.com/images/anonymous-icon/anonymous-icon-0.jpg" alt=""/>
                    <div className="text">
                        <h6>{user.id}</h6>
                        <p className="text-muted">Hey</p>
                    </div>
                </div>
                <hr/>
            </div>
            )}
        </div>
    }

    let contentM
    if(messages.length > 0){
        contentM = <div>
            {messages.map(message =>
                    (message.sender == user.userinfo) ? 
                    (
                        <div className='row no-gutters'>
                            <div className="col-md-3 offset-md-9">
                                <div className="chat-bubble chat-bubble--right">
                                    <a key={message.id} href={process.env.REACT_APP_API_URL + message.file} target="_blank">{message.file}</a>
                                    {message.content}
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='row no-gutters'>
                            <div className="col-md-3">
                                <div className="chat-bubble chat-bubble--left">
                                <a key={message.id} href={process.env.REACT_APP_API_URL + message.file} target="_blank">{message.file}</a>
                                {message.content}
                                </div>
                            </div>
                        </div>
                    )
            )}
        </div>
    }else{
        contentM = <div>
            <h1 className='text-center'>Holi hech nar yo</h1>
        </div>
    }

    const logOut = () =>{
        localStorage.clear();
        user.setUser({});
        user.setIsAuth(false);
        navigate(LOGIN_ROUTE);
    }

    return (
        <div>
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Chat</title>
                </Helmet>
            </div>
            <Container className="container-e">
                <Row>
                    <Col md={4} className="border-right">
                        <div className="search-box">
                            <div className="input-wrapper">
                                <input placeholder="Search here" type="text"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>
                            <div>
                                <span>{user._user}</span>
                                <span onClick={() => logOut()}>chiqish</span>
                            </div>
                        </div>
                            {
                                searchData
                            }
                    </Col>
                    <Col md={8}>
                        <div className="settings-tray">
                            <div className="friend-drawer no-gutters friend-drawer--grey">
                                <img className="profile-image" src="https://icon-library.com/images/anonymous-icon/anonymous-icon-0.jpg" alt=""/>
                                <div className="text">
                                <h6>2</h6>
                                </div>
                                <span className="settings-tray--right">
                                <i className="material-icons"></i>
                                <i className="material-icons"></i>
                                <i className="material-icons"></i>
                                </span>
                            </div>
                        </div>
                        <div className="chat-panel">
                            {
                                contentM
                            }
                            <div className="row">
                                <div className="col-12">
                                <div className="chat-box-tray">
                                    <input type="file"
                                        onChange={selectFile}
                                    />
                                    <input type="text" placeholder="Type your message here..."
                                        value={content}
                                        onChange={e => setContent(e.target.value)}
                                    />
                                    <Button variant='outline-success' onClick={sendM}>Send</Button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </Col>
                </Row>
            <ToastContainer />
            </Container>
        </div>
    );
});

export default Chat;