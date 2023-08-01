import React, {useState} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaRestaurantes from '../../Formularios/restaurantes/TablaRestaurantes';
import FormularioRestaurantes from '../../Formularios/restaurantes/FormularioRestaurantes';

const Restaurantes = () => {

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
            <FormularioRestaurantes/>
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

    <TablaRestaurantes restaurantes={[]}/>

</Container>



    </React.Fragment>


  )
}

export default Restaurantes