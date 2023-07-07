import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const CrearCupon = () => {



    return (


        <React.Fragment>

<div class="container">

    <div className='row justify-content-end px-0 pt-4'>
        <div className='col-md-5 bg-info'>
            <h2>CREA TUS CUPONES</h2>
        </div>
    </div>

        <br/>
        <div class="row justify-content-center pt-5">
            <div class="col-md-6" id="formulario">
                <form>
                    <div class="form-group py-1">
                        <input type="nombre" class="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                            placeholder="Nombre" />
                    </div>
                    <div class="form-group py-1">
                        <input type="codigo" class="form-control" id="exampleInputCodigo" placeholder="Codigo" />
                    </div>

                    <div class="form-group py-1">
                        <input type="valor" class="form-control" id="exampleInputValor" placeholder="Valor" />
                    </div>

                    <div class="row justify-content-center py-4">
                        <div className='col-md-5 text-center'>
                            <button type="submit" class="btn btn-primary">REGISTRAR</button>
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