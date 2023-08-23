import React from "react"
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import pizza from '../../../assets/images/pizza.png'
//import Offcanvas from 'react-bootstrap/Offcanvas';
//import Modal from 'react-bootstrap/Modal';
//import { useState } from 'react';
import '../menu/menu.css'
//import {BiFoodMenu} from "react-icons/bi";
//import Table from 'react-bootstrap/Table';
import MenuOffcanvas from "./MenuOffcanvas";

//import { Link } from "react-router-dom";

const  Menu  = () => {

    
return(
    
<React.Fragment>    
    <Container className="pt-3">
    
      <Row className="">

        <Col md={3} xs={6} className="justify-content-center ">
          <Card style={{ }}>
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
          
        <Col md={3} xs={6} className="">
          <Card style={{ }}>
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

        <Col md={3} xs={6} className="">
        
        <Card style={{  }}>
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

        <Col md={3} xs={6} className="">
          <Card style={{  }}>
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

        <Col md={3} xs={6} className="">
        
        <Card style={{  }}>
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

       <MenuOffcanvas/>
       

      </Row>

      
   
 
    </Container>
  
</React.Fragment>
)
}

export default Menu;