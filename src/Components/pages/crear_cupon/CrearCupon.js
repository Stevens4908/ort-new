import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const CrearCupon = ({cerrar}) => {



    return (


        <React.Fragment>

<div className="container">

    <div className='row justify-content-end px-0 pt-4'>
        <div className='col-md-5 fondo-ortellus bordes'>
            <h2 className='text-white'>CREA TUS CUPONES</h2>
        </div>
    </div>

        <br/>
        <div className="row justify-content-center pt-5">
            <div className="col-md-6" id="formulario">
                <form>
                    <div className="form-group py-1">
                        <input type="text" class="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                            placeholder="Nombre" />
                    </div>
                    <div className="form-group py-1">
                        <input type="text" class="form-control" id="exampleInputCodigo" placeholder="Codigo" />
                    </div>

                    <div className="form-group py-1">
                        <input type="text" class="form-control" id="exampleInputValor" placeholder="Valor" />
                    </div>

                    <div className="row justify-content-center py-4">
                        <div className='col-md-5 text-center'>
                            <button type="submit" class="btn btn-primary fondo-ortellus">REGISTRAR</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>  
</div>
               

        </React.Fragment>


    )


}

export default CrearCupon;