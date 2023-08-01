import React, {useState} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaProductos from '../../Formularios/productos/TablaProductos';
import FormularioProductos from '../../Formularios/productos/FormularioProductos';

const Productos = () => {


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
                <FormularioProductos/>
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
    
        <TablaProductos productos={[]}/>
    
    </Container>
    
    
    
        </React.Fragment>


  )
}

export default Productos