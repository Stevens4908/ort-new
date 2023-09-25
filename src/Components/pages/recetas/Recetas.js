import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioRecetas from '../../Formularios/recetas/FormularioRecetas';
import {  GetInventarioLabel } from '../../Controllers/Inventario/FuncionesInventario';
import { GetReceta ,UpdateReceta} from '../../Controllers/Recetas/FuncionesRecetas';
import { Table, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const Recetas = () => {

  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si el formulario de edición está abierto
  const [editedReceta, setEditedReceta] = useState({});
  const [inventario, setInventario]= useState([]);
  const [fotografia, setFotografia] = useState(null);
  const fetchData = async () => {
    try {
        const data = await GetInventarioLabel();
        setInventario(data);
    } catch (error) {
        console.error("Error al obtener inventario:", error);
    }
    
  };


  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);
    
      ///FIN






      const [receta, setReceta]= useState([])

      const fetchDatax = async () => {
        try {
            const data = await GetReceta();
            setReceta(data);
            console.log("trayendo foto", data)
        } catch (error) {
            console.error("Error al obtener receta:", error);
           
        }
       
      };
    
      
      useEffect(() => {
        fetchDatax(); // Llamar a la función al montar el componente
      }, []);



      ///OBTIENE LOS DATOS DE FORMULARIO 
    const handleDataFromChild = (data) => {
    
      
      setReceta(data);
     
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //onChange={(e) => setEditedReceta({ ...editedReceta, Nombre_Plato: e.target.files[0] })}
    const handleFotografiaChange = (e) => {
      const selectedFile = e.target.files[0];
  
      if (selectedFile) {
        setFotografia(selectedFile);
      }
    };
  
    const handleEliminar = async (id) => {
      try {
        // Realiza una solicitud DELETE a la API para eliminar el elemento con el ID proporcionado.
        await fetch(`http://127.0.0.1:8000/api/deletereceta/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // Actualiza la vista eliminando el elemento de la lista de recetas.
        const nuevaReceta = receta.filter(recetaItem => recetaItem.id !== id);
        setReceta(nuevaReceta);
      } catch (error) {
        console.error("Error al eliminar el elemento:", error);
      }
    };


    const handleEditar = (rece) => {
      // Cuando se hace clic en "Editar", guarda los valores de la mesa en editedMesa
      setEditedReceta({
         ...editedReceta,
        Nombre_Plato: rece.Nombre_Plato,
        Fotografia: fotografia,
        Ingredientes: rece.Ingredientes,
        id: rece.id,
        _method:"PUT",
      });
      
      console.log('Nombre de la imagen:', rece.Fotografia);
        console.log('foto', fotografia);
      
      // Abre el formulario de edición
      setIsEditing(true);
    };
  
    
  
    const handleGuardar = async () => {
console.log("this actualizar");
try {
  if (fotografia) {
      const formDataReceta = new FormData();
      formDataReceta.append('id', editedReceta.id);
      formDataReceta.append('Nombre_Plato', editedReceta.Nombre_Plato);
      formDataReceta.append('Fotografia', fotografia);
      formDataReceta.append('Ingredientes', editedReceta.Ingredientes);
      formDataReceta.append('_method', "PUT");
      console.log('esto es formdata',formDataReceta.value);
      const response = await UpdateReceta(editedReceta.id,formDataReceta);
      console.log('Respuesta del servidor:', response);
      console.log('Respuesta del foto:', fotografia);
      console.log('Respuesta del editreceta', editedReceta);
      console.log('Respuesta del formdata', formDataReceta);
      console.log("actualizacion nombre de la fotografia es : ",response[0].Fotografia);
      setIsEditing(false);
        setReceta(response)
        console.log(receta);
        fetchDatax();
      const updatedMesas = receta.map(recetaItem => {
        if (recetaItem.id === editedReceta.id) {
          return editedReceta;
        }
        return recetaItem;
      });
      setReceta(updatedMesas);
    } else {
      
    }
    } catch (error) {
      console.error("Error al actualizar el elemento:", error);
    }
    };
    
   
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear Receta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormularioRecetas  handleClose={handleClose} onDataFromChild={handleDataFromChild} inventario={inventario} />
        </Modal.Body>
       </Modal>
       <div>
        <h2>Lista de Recetas</h2>
        <div>
       {isEditing ? ( // Renderiza el formulario de edición si isEditing es true
       <Form>
      <Form.Group controlId="disponibilidadMesa">
        <Form.Label>Nombre Plato</Form.Label>
        <Form.Control
          type="text"
          name="Nombre_Plato"
          value={editedReceta.Nombre_Plato}
          onChange={(e) => setEditedReceta({ ...editedReceta, Nombre_Plato: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="Fotografia">
      <Form.Label>Fotografía</Form.Label>
      <Form.Control
      type="file"
      name="Fotografia"
     
      onChange={handleFotografiaChange}
      />
      </Form.Group>

      <Form.Group controlId="observacion">
        <Form.Label>Ingredientes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="Ingredientes"
          value={editedReceta.Ingredientes}
          onChange={(e) => setEditedReceta({ ...editedReceta, Ingredientes: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleGuardar}>
            Guardar
          </Button>
        </Form>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre del Plato</th>
              <th>Fotografía</th>
              <th>Ingredientes</th>
            </tr>
          </thead>
          <tbody>
            {receta.map((recetaItem) => (
              <tr key={recetaItem.id}>
                <td>{recetaItem.Nombre_Plato}</td>
                <td><Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Img variant="top" src={`http://127.0.0.1:8000/${recetaItem.Fotografia}`} style={{ width: '100px', height: '100px' }} /> {/* Utiliza el campo de la imagen */}
                
              </Card></td>
                
                <td>{recetaItem.Ingredientes}</td>
                <td>
                <button   className="btn btn-success" onClick={() => handleEditar(recetaItem)}>Editar</button>
                
                  <button
                    onClick={() => handleEliminar(recetaItem.id)} // Llama a la función handleEliminar con el ID del producto
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
              
            </td>
              </tr>
            ))}
          </tbody>
          </Table>
        )}
        </div>
      </div>
    </>
  )
}

export default Recetas