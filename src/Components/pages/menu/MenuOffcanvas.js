import React from 'react'
import {BiFoodMenu} from "react-icons/bi";
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const MenuOffcanvas = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  


  return (
    <>
    <Button variant="danger" onClick={handleShow} className="position-fixed posi" style={{width:"40px"}}>
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


  )
}

export default MenuOffcanvas