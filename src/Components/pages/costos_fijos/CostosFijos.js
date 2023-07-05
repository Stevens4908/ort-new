import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const CostosFijos = () => {



    return (


        <React.Fragment>

<div class="container">
        <br/>
        <div class="row">
            <div class="col-md-6" id="formulario">
                <form>
                    <div class="form-group">
                        <input type="nombre" class="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                            placeholder="Nombre" />
                    </div>
                    <div class="form-group">
                        <input type="valor" class="form-control" id="exampleInputValor" placeholder="Valor" />
                    </div>

                    <div class="form-group">
                        <input type="costo" class="form-control" id="exampleInputCosto" placeholder="Costo" />
                    </div>

                    <div class="row justify-content-center py-4">
                        <button type="submit" class="btn btn-primary">Crear costo</button>
                    </div>
                </form>
            </div>
        </div>
</div>
               

        </React.Fragment>


    )


}

export default CostosFijos;