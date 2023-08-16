import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Stack } from "react-bootstrap";
import pizza from '../../../assets/images/pizza.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
//import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import '../menu/menu.css'
import {BiFoodMenu} from "react-icons/bi";
import Table from 'react-bootstrap/Table';

//import { Link } from "react-router-dom";

const  Menu  = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
return(
    
<React.Fragment>    
    <Container className="pt-3">
    
      <Row className="">

        <Col md={4} className="justify-content-center ">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza} />
            <Card.Body>
              <Card.Title className="text-center">Pizza grande</Card.Title>
              
              <Card.Text className=" text-center" style={{fontSize:'1.1em'}}><strong>
                 $20.000</strong>
              </Card.Text>
            
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
          
        <Col md={4} className="">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza} />
            <Card.Body>
              <Card.Title className="text-center">Pizza grande</Card.Title>
              
              <Card.Text className=" text-center" style={{fontSize:'1.1em'}}><strong>
                 $20.000</strong>
              </Card.Text>
            
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="">
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza} />
            <Card.Body>
              <Card.Title className="text-center">Pizza grande</Card.Title>
              
              <Card.Text className=" text-center" style={{fontSize:'1.1em'}}><strong>
                 $20.000</strong>
              </Card.Text>
            
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
            
        </Col>

        <Col md={1} >
              <>
            <Button variant="danger" onClick={handleShow} className="position-fixed posi">
              <BiFoodMenu/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">10 
                  <span class="visually-hidden">unread messages</span>
                </span>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end" className="off-menu">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Mesa X</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
               

                <Container>
                  <Row>
                    <Col md={8}>
                      <Table striped bordered hover>
      
                        <tbody>
                          <tr>
                            <td>producto x</td>
                          
                          </tr>
                        
                        </tbody>
                      </Table>
                    </Col>
                       
                    <Col md={3}>
                      <Button variant="danger">Eliminar</Button>
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                      <Col md={6} className=""> 
                          <Stack direction="horizontal"  className="  ">
                            <div className="p-2"><Button>-</Button></div>
                            <div className="p-2 ">1</div>                        
                            <div className="p-2"><Button>+</Button></div>
                          </Stack> 
                      </Col>

                      <Col md={5} className="">
                        <Table borderless hover>
                          
                          <tbody>
                            <tr>
                              <td>Total:</td>
                              <td>$40.000</td>
                            </tr>
                          
                          </tbody>
                        </Table>
                      </Col>
                  </Row>

                  <Row className="justify-content-center mt-2">
                      

                      <Col md={7} className="">
                        
                      </Col>
                  </Row>

                  <Row className="justify-content-center">
                      <Col md={8} className=" position-absolute bottom-0 start-50 translate-middle-x"> 
                        <Row>
                          <Table borderless hover className="">
                            
                            <tbody>
                              <tr>
                                <td>Valor Total:</td>
                                <td>$40.000</td>
                              </tr>
                            
                            </tbody>
                          </Table>
                        </Row>
                          
                        <Row className="justify-content-center">
                          <Col md={7}>
                            <Stack  className="col-md-12 mx-auto pb-3">
                              <Button variant="success">Crear Venta</Button>                              
                            </Stack>
                          </Col>
                            
                        </Row>
                          
                      </Col>
                  </Row>
                </Container>


              </Offcanvas.Body>
            </Offcanvas>
          </>
        </Col>

      </Row>

      
   
 
    </Container>
  
</React.Fragment>
)
}

export default Menu;