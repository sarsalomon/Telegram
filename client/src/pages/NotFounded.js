import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Card, Button  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const NotFounded = () => {
    return (
        <div>
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>404</title>
                </Helmet>
            </div>
            <Container className='d-flex justify-content-center align-items-center'>
                <Card style={{padding:20, width:600}} className='d-flex justify-content-center align-items-center'>
                    <h3>Siz qidirgan sahifa mavjud emas</h3>
                            
                    <NavLink to={LOGIN_ROUTE}>
                        <Button className='p-3'>
                                    Bosh sahifa
                        </Button>                                
                    </NavLink>
                </Card>
            </Container>
        </div>
    );
};

export default NotFounded;