import React from 'react'
import { Table, InputGroup, Form, Button } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';


const NumeroMesas = () => {

const menu = [

{
    producto: 'agua',
    cantidad: '333',
    valor: '1000',
    className: 'text-white fondo-ortellus'
},
{
    producto: 'gaseosa',
    cantidad: '233',
    valor:'3500',
    className: 'text-white fondo-ortellus'
},
{
    producto: 'cerveza',
    cantidad: '150',
    valor:'5700',
    className: 'text-white fondo-ortellus'
},
{
    producto: 'agua',
    cantidad: '333',
    valor: '1000',
    className: 'text-white fondo-ortellus'
},
{
    producto: 'gaseosa',
    cantidad: '233',
    valor:'3500',
    className: 'text-white fondo-ortellus'
},
{
    producto: 'agua',
    cantidad: '333',
    valor: '1000',
    className: 'text-white fondo-ortellus'
},
{
    producto: 'gaseosa',
    cantidad: '233',
    valor:'3500',
    className: 'text-white fondo-ortellus'
},

]



  return (


 <React.Fragment>  
    <div className="container pb-5">
        <form>
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Número de mesas</h2>
                </div>
            </div>
            <br/>

            <div className="row justify-content-center pb-4">
                <div className="col-md-1 mb-4 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">1</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">2</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">3</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">4</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">5</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">6</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">7</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">8</h3>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="row justify-content-center">
                <div className="col-md-1 mb-4 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">9</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">10</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">11</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">12</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">13</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">14</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">15</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-3 ">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-dark">
                            <h3 className="text-center">16</h3>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
          
            
            <div className="row px-md-5">

                
                <div className="col-md-7 fondo-ortellus ">
                    <h3 className="text-center text-white">Menu</h3>
                    
                        <Table bordered responsive hover="lg">
                            <thead>
                                <tr>
                               
                                <th className='text-white fondo-ortellus'>PRODUCTO</th>
                                <th className='text-white fondo-ortellus'>CANTIDAD</th>
                                <th className='text-white fondo-ortellus'>VALOR</th>
                                </tr>
                            </thead>

                            <tbody className=''>

                               {menu.map((item, index) => (
                                <tr key={index}>
                                <td 
                                    className={item.className} 
                                >{item.producto}</td>

                                <td 
                                    className={item.className} 
                                > {item.cantidad}</td>

                                <td 
                                    className={item.className} 
                                >$ {item.valor}</td>

                                </tr>
                               ))}


                            {/*
                                <tr >
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                </tr>

                                <tr>       
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                </tr>

                                <tr>                               
                                <td className='text-white fondo-ortellus' ></td>
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                </tr>

                                <tr>                               
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                </tr>

                                <tr>                               
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                <td className='text-white fondo-ortellus'></td>
                                </tr>

                                       */ }


                            </tbody>
                        </Table>

                </div>

                <div className="col-md-4 pb-5 align-self-end text-center">
                    <div className="row">
                        <div className="col-md-10 pb-5">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><AiOutlineSearch/></InputGroup.Text>
                                <Form.Control
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                           <Link to="/dashboard/mesas/gestionmesas"><Button variant="dark">AGREGAR</Button></Link> 

                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    
 
    
</React.Fragment>
    
    

  )
}

export default NumeroMesas