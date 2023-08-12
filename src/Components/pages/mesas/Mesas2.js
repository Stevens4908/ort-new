import React, {useState, useEffect} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaMesa from '../../Formularios/mesas/TablaMesas'
import FormularioMesas from '../../Formularios/mesas/FormularioMesas'
import { GetMesas } from '../../Controllers/Mesas/funcionesMesas'

const Mesas2 = () => {

  const [mesa,setMesa]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetMesas();
        setMesa(data);
    } catch (error) {
        console.error("Error al obtener mesas:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);


  ///OBTIENE LOS DATOS DE FORMULARIO 
  const handleDataFromChild = (data) => {
    
    console.log(data);
    setMesa(data);
   
  };
  //FINN

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
   
    <React.Fragment>

    <Container className='py-3'>
    
            
          <Button variant="primary" onClick={handleShow} className='mb-3'>
           Crear Mesa
          </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <FormularioMesas handleClose={handleClose} onDataFromChild={handleDataFromChild}/>
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
    
        <TablaMesa mesas={mesa}/>
    
    </Container>
    
    
    
        </React.Fragment>


  )
}

export default Mesas2