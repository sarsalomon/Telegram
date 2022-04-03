import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Container, Row, Col, Dropdown, InputGroup, FormControl, Form, ListGroup, ListGroupItem, Badge } from 'react-bootstrap'

import Logo from '../assets/logo.png'

const Chat = () => {
    return (
        <div>
            <Container fluid>
                <Row className='rowHeightMax'>
                    <Col md={3} className="LeftColumn">
                        <div className='ChatMenu'>
                            <Dropdown>
                                <Dropdown.Toggle className='ChatMenuIconButton'>
                                    <FontAwesomeIcon icon={solid('bars')} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='ChatMenuContent'>
                                    <Dropdown.Item className="ChatMenuContentItem">
                                        <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item className="ChatMenuContentItem">
                                        <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item className="ChatMenuContentItem">
                                        <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item className="ChatMenuContentItem">
                                        <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item className="ChatMenuContentItem">
                                        <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item className="ChatMenuContentItem">
                                        <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                        Action
                                    </Dropdown.Item>
                                    <span className='ChatMenuContentFooterText'>
                                        Telegram Z version <br/>1.49
                                    </span>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className="ChatMenuSearch">
                                <Form className='ChatMenuSearchFrom'>
                                    <FontAwesomeIcon icon={solid('search')} className="ChatMenuSearchInputIcon"/>
                                    <FormControl placeholder='Search' className='ChatMenuSearchInput'/>
                                </Form>
                            </div>
                        </div>
                        <div className="ChatList">
                           <ListGroup variant='flush'>
                               <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem>
                               <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem> <ListGroupItem className="ChatListItem">
                                   <div className="ChatListImg">
                                       <img src={Logo} alt="Avatar"/>
                                   </div>
                                   <div className="ChatListContent">
                                       <div className='ChatListTitle'>
                                            <h5>Ахангарночкаа</h5>
                                            <div className="LastMessageTime">
                                                <span className='time'>22:56</span>
                                            </div>
                                       </div>
                                        <div className="ChatListSubTitle">
                                            <p className='ChatListSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</p>
                                            <Badge pill>
                                                12
                                            </Badge>
                                        </div>
                                   </div>
                               </ListGroupItem>
                           </ListGroup>
                        </div>
                    </Col>
                    <Col md={9} className="MainColumn">
                        <div className="ChatInfo">
                            <div className="ChatInfoMeta">
                                <div className="ChatInfoImg">
                                    <img src={Logo} alt="Avatar"/>
                                </div>
                                    <div className="ChatInfoTitle">
                                        <h5>1</h5>
                                        <span className='ChatInfoSubtitleText'>Продается 3 -х комнатая квартира в центре города 4 микро район</span>
                                </div>

                            </div>
                            <div className="ChatInfoIcons">
                                <Dropdown>
                                    <Dropdown.Toggle className='ChatMenuIconButton'>
                                        <FontAwesomeIcon icon={solid('ellipsis-vertical')} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='ChatMenuContent'>
                                        <Dropdown.Item className="ChatMenuContentItem">
                                            <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item className="ChatMenuContentItem">
                                            <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                            Update
                                        </Dropdown.Item>
                                        <Dropdown.Item className="ChatMenuContentItem">
                                            <FontAwesomeIcon icon={solid('bars')} className="me-3"/>
                                            Delete
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="ChatContent">
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Chat;