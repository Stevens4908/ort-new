import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../acceso.css'
import logo from '../../../assets/images/logo.png'
import text from '../../../assets/images/logo-text.png'





const  Logins  = () => {

    const [User, setUsername] = useState("");
    const [Contra, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {

        e.preventDefault()

        const isCredentialsValid = User === "sha" && Contra === "1234";
        
        if(isCredentialsValid) {
            window.location.href = "dashboard"
         }
         else {
             alert("credenciales incorrectas")
         }

         localStorage.setItem('sha' , '1234')

        }
  
return(

<React.Fragment>

<Container className="pt-1">
  
    <Row className="justify-content-center pt-2 pb-4"> 
      <h3 className="text-center color-ortellus">BIENVENIDOS A </h3>
      <Col md={5} xs={4} >
      <img src={text} className="img-fluid" alt="logo-text"></img>
      </Col>
    </Row>

    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="" value={User}  onChange={handleEmailChange} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="" value={Contra} onChange={handlePasswordChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar mis datos" />
      </Form.Group>
      <FormGroup>
        <Form.Text className="text-muted ">
         OLVIDASTE TU CONTRASEÑA? <Link to="forgot" className="enlace-simple color-ortellus">INGRESA AQUI</Link>
        </Form.Text>
        <Link to="register" className="enlace-simple"><h4 className="text-center color-ortellus">REGISTRATE AQUI</h4></Link>
      </FormGroup>

      <Button className="offset-4 fondo-ortellus" variant="success" type="submit" onClick={handleLogin}>
        Iniciar Sesión
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

export default Logins;