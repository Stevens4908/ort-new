import React, {useState, useEffect} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaPedidos from '../../Formularios/pedidos/TablaPedidos';
import FormularioPedidos from '../../Formularios/pedidos/FormularioPedidos';
import { GetPedidos } from '../../Controllers/Pedidos/funcionesPedidos';

const Pedidos = () => {


  ///ESTA FUNCION OBTIENE LOS DATOS Y CAMBIA EL ESTADO
  const [pedido,setPedido]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetPedidos();
        setPedido(data);
    } catch (error) {
        console.error("Error al obtener pedidos:", error);
    }
  };


  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);
    
      ///FIN

         
///OBTIENE LOS DATOS DE FORMULARIO 
    const handleDataFromChild = (data) => {
    
      console.log(data);
      setPedido(data);
     
    };
    //FINN


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
   
<React.Fragment>

<Container className='py-3'>

        
      <Button variant="primary" onClick={handleShow} className='mb-3'>
       Crear Pedido
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <FormularioPedidos handleClose={handleClose} onDataFromChild={handleDataFromChild}/>
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

    <TablaPedidos pedidos={pedido}/>

</Container>



    </React.Fragment>


  )
}

export default Pedidos