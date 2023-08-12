import React, {useState, useEffect} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaProductos from '../../Formularios/productos/TablaProductos';
import FormularioProductos from '../../Formularios/productos/FormularioProductos';
import { GetProductos } from '../../Controllers/Productos/funcionesProductos';

const Productos = () => {


  ///ESTA FUNCION OBTIENE LOS DATOS Y CAMBIA EL ESTADO
  const [producto,setProducto]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetProductos();
        setProducto(data);
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
  };


  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);
    
      ///FIN

    ///OBTIENE LOS DATOS DE FORMULARIO 
    const handleDataFromChild = (data) => {
    
      console.log(data);
      setProducto(data);
     
    };
    //FINN


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    
    <React.Fragment>

    <Container className='py-3'>
    
            
          <Button variant="primary" onClick={handleShow} className='mb-3'>
           Crear Producto
          </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <FormularioProductos handleClose={handleClose} onDataFromChild={handleDataFromChild}/>
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
    
        <TablaProductos productos={producto}/>
    
    </Container>
    
    
    
        </React.Fragment>


  )
}

export default Productos