import React, { useContext, useState } from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import {NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { login, registration } from '../http/userAPI';
import { Context } from '..';
import { CHAT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [fish, setFish] = useState('');
    const [password, setPassword] = useState('');

    let reg
    if(isLogin){
        reg = <div>
                <Form.Control
                    className='mt-3'
                    placeholder='Login yozing...'
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Parol yozing...'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Row>
                    <NavLink to={REGISTER_ROUTE}>Ro`yxatdan o`tish</NavLink>
                </Row>
                </div>
    }else{
        reg =   <div>

                <Form.Control
                    className='mt-2'
                    placeholder='Fish yozing...'
                    value={fish}
                    onChange={e => setFish(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Login yozing...'
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Parol yozing...'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Row>
                    <NavLink to={LOGIN_ROUTE}>Tizimga kirish</NavLink>
                </Row>
                </div>
    }

    const click = async () => {
        try{
            let data;
            if(isLogin){
                data = await login(email, password)
            }else{
                data = await registration(email, password, fish)
            }
            user.setUserInfo(data.id);
            user.setUser(true);
            user.setIsAuth(true);
            if(data){
                    navigate(CHAT_ROUTE)
            }
        }catch(e){
            toast.error(e.response.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className='backgroundbody'>
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{isLogin ? 'Tizimga kirish' : "Ro`yxatdan o`tish"}</title>
                </Helmet>
            </div>
            <Container
                className='d-flex justify-content-center align-items-center'
                style={{height: window.innerHeight-54}}
            >
                <Card className='p-5 authCard'>
                    <h2 className='m-auto'>{isLogin ? 'Tizimga kirish' : "Ro`yxatdan o`tish"}</h2>
                    <Form className='d-flex flex-column'>
                        {
                            reg
                        }
                        <Button
                            variant='success'
                            size="lg" 
                            className='mt-3 align-self-end'
                            onClick={click}
                        >
                            {isLogin ? 'Kirish' : "Ro`yxatdan o`tish"}
                        </Button>
                    </Form>
                </Card>
            </Container>
            <ToastContainer />
        </div>
    );
});

export default Auth;