import React, {useState, useEffect} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import TablaFacturaciones from '../../Formularios/facturaciones/TablaFacturaciones'
import FormularioFacturaciones from '../../Formularios/facturaciones/FormularioFacturaciones'
import { GetFacturaciones } from '../../Controllers/Facturaciones/funcionesFacturaciones'

const Facturaciones = () => {

  ///ESTA FUNCION OBTIENE LOS DATOS Y CAMBIA EL ESTADO
  const [facturacion, setFacturacion]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetFacturaciones();
        setFacturacion(data);
    } catch (error) {
        console.error("Error al obtener facturas:", error);
    }
  };


  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);
    
      ///FIN


      ///OBTIENE LOS DATOS DE FORMULARIO 
    const handleDataFromChild = (data) => {
    
      console.log(data);
      setFacturacion(data);
     
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
  
    <React.Fragment>

<Container className='py-3'>

        
      <Button variant="primary" onClick={handleShow} className='mb-3'>
       Crear Facturación
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <FormularioFacturaciones handleClose={handleClose} onDataFromChild={handleDataFromChild}/>
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

    <TablaFacturaciones facturaciones={facturacion}/>

</Container>



    </React.Fragment>

  )
}

export default Facturaciones