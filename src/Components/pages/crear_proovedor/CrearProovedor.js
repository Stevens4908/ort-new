import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const CrearProovedor = () => {



    return (


        <React.Fragment>

<div class="container">

        <div className='row justify-content-end px-0'>
            <div className='col-md-8 bg-info'>
                <h2>INGRESA LOS DATOS DEL PROOVEDOR</h2>
            </div>
        </div>

        <br/>
        <div class="row justify-content-center mt-5">
            <div class="col-md-6 " id="formulario">
                <form>
                    <div class="form-group py-1">
                        <input type="nombre" class="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                            placeholder="Nombre" />
                    </div>
                    <div class="form-group py-1">
                        <input type="nit" class="form-control" id="exampleInputNit" placeholder="Nit" />
                    </div>

                    <div class="form-group py-1">
                        <input type="direccion" class="form-control" id="exampleInputDireccion" placeholder="Direccion" />
                    </div>

                    <div class="row justify-content-center py-4">
                        <div className='col-md-6  text-center'>
                                <button type="submit" class="btn btn-primary ">REGISTRAR</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
</div>
               

        </React.Fragment>


    )


}

export default CrearProovedor;