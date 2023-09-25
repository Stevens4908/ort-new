import React , {useState, useEffect} from 'react'
import { GetInventario } from '../../Controllers/Inventario/FuncionesInventario';
import { Container, Button, Modal } from 'react-bootstrap'
import TablaInventario from '../../Formularios/inventario/TablaInventario';
import FormularioInventario from '../../Formularios/inventario/FormularioInventario';

const Inventario = () => {

      ///ESTA FUNCION OBTIENE LOS DATOS Y CAMBIA EL ESTADO
  const [inventario, setInventario]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetInventario();
        setInventario(data);
    } catch (error) {
        console.error("Error al obtener inventario:", error);
    }
    
  };
  console.log(inventario);

  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);
    
      ///FIN


      ///OBTIENE LOS DATOS DE FORMULARIO 
    const handleDataFromChild = (data) => {
    
      console.log(data);
      setInventario(data);
     
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
   

<React.Fragment>

<Container className='py-3'>

        
      <Button variant="primary" onClick={handleShow} className='mb-3'>
       Crear Inventario
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <FormularioInventario handleClose={handleClose} onDataFromChild={handleDataFromChild}/>
        </Modal.Body>

       
    </Modal>

    <TablaInventario inventario={inventario} setInventario={setInventario}/>

</Container>



</React.Fragment>


  )
}

export default Inventario