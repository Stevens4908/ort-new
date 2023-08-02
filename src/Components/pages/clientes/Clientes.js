import React, {useState} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaClientes from '../../Formularios/clientes/TablaClientes';
import FormularioClientes from '../../Formularios/clientes/FormularioClientes';

const Clientes = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <React.Fragment>

<Container className='py-3'>

        
      <Button variant="primary" onClick={handleShow} className='mb-3'>
       Crear Cliente
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <FormularioClientes/>
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

    <TablaClientes clientes={[]} />

</Container>



    </React.Fragment>
  )
}

export default Clientes