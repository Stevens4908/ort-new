import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
//import { Link } from "react-router-dom";






const  Menu  = () => {

   
  
return(

<React.Fragment>
        
    <Container>

    <div className='row justify-content-end px-0 pt-4'>
        <div className='col-11 col-md-8 fondo-ortellus text-end bordes'>
            <h2 className="text-white">AGREGA LAS SECCIONES NECESARIAS AL MENU</h2>
        </div>
    </div>

        <Form className="pt-5">
        <Row className="justify-content-center">
            
            <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasic1">
                    <Form.Label>Producto</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic2">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>
            </Col>

            <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasic3">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic4">
                    <Form.Label>Valor Venta</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>
            </Col>

            <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasic5">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="password" placeholder="xxxxxx" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4 fondo-ortellus">
                AGREGAR AL MENU
                </Button>
            </Col>
           
        </Row>
      

         </Form>    



           
         <Form className="fondo-ortellus pt-3">
        <Row className="justify-content-center">
            
            <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasic6">
                    <Form.Label>Producto</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic7">
                    <Form.Label>Costo</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>
            </Col>

            <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasic8">
                    <Form.Label>Receta</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic9">
                    <Form.Label>Valor Venta</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>
            </Col>

            <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasic10">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="password" placeholder="xxxxxx" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic11">
                    <Form.Label>Cantidad Aproximada</Form.Label>
                    <Form.Control type="text" placeholder="xxxxxx" />
                </Form.Group>   
            </Col>

          

        </Row>

        <Row className="justify-content-center pb-3">
            <Col md={4} className="text-center">
                <Button variant="dark" type="submit" className="">
                    AGREGAR AL MENU
                </Button>
            </Col>
           
        </Row>
            

         </Form>    

         
         <Row className="justify-content-center mt-5">
            <Col md={4} className="text-center">
                <Button variant="dark" type="submit" className="">
                    VER MENU
                </Button>
            </Col>
           
        </Row>

            
        

    </Container>
    

      
</React.Fragment>
   
)



}

export default Menu;