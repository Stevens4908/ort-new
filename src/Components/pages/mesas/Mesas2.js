import React, {useState} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaMesa from '../../Formularios/mesas/TablaMesas'
import FormularioMesas from '../../Formularios/mesas/FormularioMesas'

const Mesas2 = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
   
    <React.Fragment>

    <Container>
    
            
          <Button variant="primary" onClick={handleShow}>
           Crear Cliente
          </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <FormularioMesas/>
            </Modal.Body>
    
           {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>*/}
        </Modal>
    
        <TablaMesa mesas={[]}/>
    
    </Container>
    
    
    
        </React.Fragment>


  )
}

export default Mesas2