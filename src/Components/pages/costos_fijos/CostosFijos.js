import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const CostosFijos = () => {



    return (


        <React.Fragment>

<div className="container">

        <div className='row justify-content-end px-0 mt-4'>
            <div className='col-md-8 bg-info'>
                <h2>INGRESA LOS COSTOS DE TU NEGOCIO</h2>
            </div>
        </div>

        <br/>
        <div className="row justify-content-center mt-5">
            <div className="col-md-6" id="formulario">
                <form>
                    <div className="form-group py-1">
                        <input type="nombre" class="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                            placeholder="Nombre" />
                    </div>
                    <div className="form-group py-1">
                        <input type="valor" class="form-control" id="exampleInputValor" placeholder="Valor" />
                    </div>

                    <div className="form-group py-1">
                        <input type="costo" class="form-control" id="exampleInputCosto" placeholder="Costo" />
                    </div>

                    <div className="row justify-content-center py-4">
                        <div className='col-md-6 text-center'>
                            <button type="submit" class="btn btn-primary">CREAR COSTO</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
</div>
               

        </React.Fragment>


    )


}

export default CostosFijos;