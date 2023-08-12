import React, {useState, useEffect} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaClientes from '../../Formularios/clientes/TablaClientes';
import FormularioClientes from '../../Formularios/clientes/FormularioClientes';
import { GetCliente } from '../../Controllers/Clientes/funcionesClientes';

const Clientes = () => {


  const [cliente,setCliente]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetCliente();
        setCliente(data);
    } catch (error) {
        console.error("Error al obtener restaurantes:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);

  const handleDataFromChild = (data) => {
    
    console.log(data);
    setCliente(data);
   
  };

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
            <FormularioClientes handleClose={handleClose} onDataFromChild={handleDataFromChild}/>
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

    <TablaClientes clientes={cliente} />

</Container>



    </React.Fragment>
  )
}

export default Clientes