import React from 'react'
import { Table } from 'react-bootstrap'

const MesasAtendidas = () => {
  return (
    
<React.Fragment>

    <div class="container">
                    <form>
                        <br/>
                        <div class="row justify-content-center pb-4">
                <div class="col-md-1 mb-4 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark">
                            <h3 class="text-center">1</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark bg-danger">
                            <h3 class="text-center">2</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark">
                            <h3 class="text-center">3</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark bg-danger">
                            <h3 class="text-center">4</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark">
                            <h3 class="text-center">5</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark bg-danger">
                            <h3 class="text-center">6</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark">
                            <h3 class="text-center">7</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-3">
                    <div class="row justify-content-center">
                        <div class="col-md-6 border border-dark bg-danger">
                            <h3 class="text-center">8</h3>
                        </div>
                    </div>
                </div>
            </div>
                    </form>




        <div class="row justify-content-center">
                    <div class="col-md-1 py-4">
                        <button type="submit" class="btn btn-dark">AGREGAR</button>
                    </div>
        </div>

        <div class="row">
                <div class="col-12 text-center">
                    <h2>Menu</h2>
                </div>
            </div>

        <div class="row justify-content-center">
                < div class="col-md-7">
                    
                    <Table bordered responsive="lg">
                        <thead>
                            <tr>
                           
                            <th className='text-white fondo-ortellus'>PRODUCTO</th>
                            <th className='text-white fondo-ortellus'>CANTIDAD</th>
                            <th className='text-white fondo-ortellus'>VALOR</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className=''>
                            <td className='fondo-ortellus'></td>
                            <td className='fondo-ortellus'></td>
                            <td className='text-white fondo-ortellus' ></td>
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
                        </tbody>
                    </Table>

                </div>
        </div>


    </div>




        

    
                


</React.Fragment>

    
  )
}

export default MesasAtendidas