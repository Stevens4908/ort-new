import React, {useState} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaPedidos from '../../Formularios/pedidos/TablaPedidos';
import FormularioPedidos from '../../Formularios/pedidos/FormularioPedidos';

const Pedidos = () => {

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
            <FormularioPedidos/>
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

    <TablaPedidos pedidos={[]}/>

</Container>



    </React.Fragment>


  )
}

export default Pedidos