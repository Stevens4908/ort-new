import React, {useState ,useEffect} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaRestaurantes from '../../Formularios/restaurantes/TablaRestaurantes';
import FormularioRestaurantes from '../../Formularios/restaurantes/FormularioRestaurantes';
import { GetRestaurantes } from '../../Controllers/Restaurantes/functionsrestaurantes';

const Restaurantes = () => {


  ///ESTA FUNCION OBTIENE LOS DATOS Y CAMBIA EL ESTADO
  const [restaurant,setRestaurante]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetRestaurantes();
        setRestaurante(data);
    } catch (error) {
        console.error("Error al obtener restaurantes:", error);
    }
  };


  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);
    
      ///FIN

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   


   
///OBTIENE LOS DATOS DE FORMULARIO 
    const handleDataFromChild = (data) => {
    
      console.log(data);
      setRestaurante(data);
     
    };
    //FINN
  return (
    
    
    <React.Fragment>

<Container className='py-3'>

        
      <Button variant="primary" onClick={handleShow} className='mb-3'>
       Crear Restaurante
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <FormularioRestaurantes  onDataFromChild={handleDataFromChild}/>
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
   
    <TablaRestaurantes restaurantes={restaurant}/>

</Container>



    </React.Fragment>


  )
}

export default Restaurantes