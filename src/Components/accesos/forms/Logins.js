import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";






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
            window.location.href = "/"
         }
         else {
             alert("credenciales incorrectas")
         }
        }
  
return(

  <React.Fragment>

<Container className="pt-5">

    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={User}  onChange={handleEmailChange} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Contra} onChange={handlePasswordChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar mis datos" />
      </Form.Group>
      <FormGroup>
        <Form.Text className="text-muted">
         OLVIDASTE TU CONTRASEÑA? <Link to="forgot">INGRESA AQUI</Link>
        </Form.Text>
        <Link to="register"><h4>REGISTRATE AQUI</h4></Link>
      </FormGroup>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Iniciar Sesión
      </Button>
    </Form>
    
</Container>

    
     

      
  </React.Fragment>
   
)



}

export default Logins;