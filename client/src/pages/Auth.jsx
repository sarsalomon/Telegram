import React, { useEffect, useState } from 'react';
import { Container, Row, Card, Form, Dropdown, Button } from 'react-bootstrap'
import Logo from '../assets/logo.png'

const Auth = () => {
    const [coords, setCoords] = useState({x:-1, y:-1});
    const [isRippling, setIsRippling] = useState(false);
    console.log(isRippling)

    useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1){
          setIsRippling(true);
          setTimeout(() => setIsRippling(false), 1000);
      }else setIsRippling(false);
    }, [coords])

    useEffect(() => {
        if (!isRippling) setCoords({x:-1, y:-1});
    }, [isRippling])    

    return (
        <div>
            <Container fluid>
              <Row className='rowHeightMax'>
                <Card className="mx-auto my-auto border-0 AuthCard">
                  <Card.Body>
                    <div className='text-center'>
                      <img src={Logo} alt="Telegram" className='AuthLogo mb-5' />
                      <h2 className='text-white'>Sign in to Telegram</h2>
                      <p className='SecondaryTextColor'>Please confirm your country and <br/> enter your phone number.</p>
                    </div>
                    <Form>
                      <Dropdown className="AuthCountryDrop">
                        <span className='InBorder'>Country</span>
                        <Dropdown.Toggle className="AuthCountry p-3 d-flex align-items-start   align-items-center justify-content-between">
                          Country
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="AuthContryMenu">
                          <Dropdown.Item className="d-flex justify-content-between">
                            <span> <img src={Logo} alt="UZ" width={26} height={26} /></span>
                            <span>Uzbekistan</span>
                            <span>+998</span>
                          </Dropdown.Item>
                          <Dropdown.Item className="d-flex justify-content-between">
                            <span> <img src={Logo} alt="UZ" width={26} height={26} /></span>
                            <span>dawd</span>
                            <span>+9awdawd98</span>
                          </Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>1</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <br/>
                      <Form.Group className='mb-3 AuthFormGoup'>
                        <Form.Label className='InBorder'>Phone Number</Form.Label>
                        <Form.Control type='text' className="AuthInput p-3" value="+998 -- --- -- --"></Form.Control>
                      </Form.Group>
                      <Form.Group className='mb-3' style={{positon:"relative"}}>
                        <Form.Check type="checkbox" className="AuthCheck p-4 d-flex justify-content-around align-items-center" label="Keep my signed in"></Form.Check>
                      </Form.Group>
                      <div className='d-grid gap-2'>
                        <Button className="AuthButton py-3 ripple-button"
                          onClick={e => {
                            const coord = e.target.getBoundingClientRect();
                            setCoords({x: e.clientX - coord.left, y: e.clientY - coord.top})
                          }}
                        >
                          { isRippling ? (<span className='ripple' style={{left: coords.x, top: coords.y}}></span>) : ('')}
                          NExt
                        </Button>
                      </div>
                      <br/>
                      <div>
                        <div className='d-grid gap-2'>
                          <Button className="AuthButtonLink py-3">
                            <span>login in by qr code</span>
                          </Button>
                        </div>
                        <div className='d-grid gap-2 mt-2'>
                          <Button className="AuthButtonLink py-3">
                            продолжить на русском
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Row>
            </Container>
        </div>
    );
};

export default Auth;