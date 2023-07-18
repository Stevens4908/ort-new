import React from 'react'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
import text from '../../../assets/images/logo-text.png'
import logo from '../../../assets/images/logo.png'



const Rol = () => {
  return (
    
    <React.Fragment>


        <Container className='pt-5'>


                <Row className="justify-content-center pt-2 pb-4"> 
                        <h3 className="text-center color-ortellus">Bienvenidos a </h3>
                    <Col md={5} xs={4} >
                        <img src={text} className="img-fluid" alt="logo-text"></img>
                    </Col>
                        <h5 className='text-center pt-3 color-ortellus'>NOS ENCANTARIA SABER QUIEN ERES</h5>
                </Row>

            <Form>

                <Form.Group className="mb-3" controlId="formBasic8">
                    <Form.Label>DEFINE TU ROL</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic8">
                    <Form.Label>CUENTANOS CUAL ES TU NEGOCIO</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" className="offset-5 fondo-ortellus">
                    ENVIAR
                </Button>

            </Form>   

                <Row className="justify-content-center pt-3"> 
                    <Col md={6} xs={4} >
                        <img src={logo} className="img-fluid" alt="logo"></img>
                    </Col>
                </Row>

        </Container>

    </React.Fragment>



  )
}

export default Rol