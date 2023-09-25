import React , {useState, useEffect} from "react"
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
//import pizza from '../../../assets/images/pizza.png'
//import Offcanvas from 'react-bootstrap/Offcanvas';
//import Modal from 'react-bootstrap/Modal';
//import { useState } from 'react';
import '../menu/menu.css'
//import {BiFoodMenu} from "react-icons/bi";
//import Table from 'react-bootstrap/Table';
import MenuOffcanvas from "./MenuOffcanvas";
import FormularioMenu from "../../Formularios/menu/FomularioMenu";
//import { GetReceta } from "../../Controllers/Recetas/FuncionesRecetas";
import { Table, Form, Button } from "react-bootstrap";

//import { Link } from "react-router-dom";
const  Menu  = () => {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si el formulario de edición está abierto
  const [menus, setClientes] = useState([]);
  const [editedMenu, setEditedMenu] = useState({});
  useEffect(() => {
      fetch("http://127.0.0.1:8000/api/receta_menu/43")
        .then(response => response.json())
        .then(datareact => setClientes(datareact.data))
        .catch(error => console.error(error));
    }, []);
      ///FIN
    //console.log(menus);

      ///OBTIENE LOS DATOS DE FORMULARIO 
     
      
      const [menus1, setClientess] = useState([]);
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/menu")
        .then(response => response.json())
        .then(datareact => setClientess(datareact.data))
        .catch(error => console.error(error));
    }, []);
      ///FIN
   // console.log(menus1);
          


    const handleEliminar = async (id) => {
      try {
        // Realiza una solicitud DELETE a la API para eliminar el elemento con el ID proporcionado.
        await fetch(`http://127.0.0.1:8000/api/deletemenu/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // Actualiza la vista eliminando el elemento de la lista de recetas.
        const nuevaReceta = menus1.filter(item => item.id !== id);
        setClientess(nuevaReceta);
      } catch (error) {
        console.error("Error al eliminar el elemento:", error);
      }
    };

    const handleEditar = (men) => {
      // Cuando se hace clic en "Editar", guarda los valores de la mesa en editedMesa
      setEditedMenu({
        Id_Receta: men.Id_Receta,
        Precio: men.Precio,
        descripcion: men.descripcion,
        id: men.id,
      });
      // Abre el formulario de edición
      setIsEditing(true);
    };
    const handleDataFromChild = (data) => {
     console.log(data);
  if (Array.isArray(data)) {
    setClientess(data);
  } else {
    console.error("Los datos recibidos no son un array válido:", data);
  }
    };
    
   //const handleDataFromChild = (data) => {
    
    // console.log(data);
     // setInventario(data);
     
    //};
  
    const handleGuardar = async () => {
      try {
        // Envía los datos editados al servidor
        await fetch(`http://127.0.0.1:8000/api/menu/${editedMenu.id}`, {
          method: 'PATCH', // Puedes usar 'PATCH' si la API lo admite
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedMenu),
        });
        
        //console.log(editedMenu);
        // Cierra el formulario de edición
        setIsEditing(false);
  
        // Actualiza la lista de mesas con los datos editados
        const updatedMesas = menus1.map(item => {
          if (item.id === editedMenu.id) {
            return editedMenu;
          }
          return item;
        });
        setClientess(updatedMesas);
      } catch (error) {
        console.error("Error al actualizar el elemento:", error);
      }
    };
    
   

    
return(
    
<React.Fragment>    
    <Container className="pt-3">
    
    <FormularioMenu onDataFromChild={handleDataFromChild} />
    <div>
       {isEditing ? ( // Renderiza el formulario de edición si isEditing es true
       <Form>
      <Form.Group controlId="disponibilidadMesa">
        <Form.Label>Id Recetas</Form.Label>
        <Form.Control
          type="text"
          name="Disponibilidad_mesa"
          value={editedMenu.Id_Receta}
          onChange={(e) => setEditedMenu({ ...editedMenu, Id_Receta: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="registrarMesa">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          name="Registrar_mesa"
          value={editedMenu.Precio}
          onChange={(e) => setEditedMenu({ ...editedMenu, Precio: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="observacion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="Observacion"
          value={editedMenu.descripcion}
          onChange={(e) => setEditedMenu({ ...editedMenu, descripcion: e.target.value })}
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
          <th>Id Receta</th>
          <th>Precio</th>
          <th>Descripcion</th>
          <th>options</th>
          
           </tr>
      </thead>
      <tbody>
        {menus1.map((item, index) => (
          <tr key={index}>
            <td>{item.Id_Receta}</td>
            <td>{item.Precio}</td>
            <td>{item.descripcion}</td>
            <td>
            <button   className="btn btn-success" onClick={() => handleEditar(item)}>Editar</button>
                
                  <button
                    onClick={() => handleEliminar(item.id)} // Llama a la función handleEliminar con el ID del producto
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
    <Row className="">
          {menus.map(menu => (
            <Col md={3} xs={6} className="justify-content-center " key={menu.id}>
              <Card style={{ }}>
              <Card.Img variant="top" src={`http://127.0.0.1:8000/${menu.Fotografia}`} /> {/* Utiliza el campo de la imagen */}
                <Card.Body>
                  <Card.Title className="text-center">{menu.Nombre_Plato}</Card.Title>
                  <Card.Text className=" text-center" style={{fontSize:'1.1em'}}><strong>
                     ${menu.Precio}</strong>
                  </Card.Text>
                  <Card.Text>
                  {menu.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <MenuOffcanvas/>
        </Row>


     
      
   
 
    </Container>
  
</React.Fragment>
)
}

export default Menu;