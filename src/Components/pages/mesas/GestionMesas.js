import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Link } from 'react-router-dom';


const GestionMesas = () => {


    return (


        <React.Fragment>

<div class="container">

    <div className='row justify-content-end px-0 mt-4'>
        <div className='col-md-5 fondo-ortellus bordes'>
            <h2 className='text-white'>GESTIONA TUS MESAS</h2>
        </div>
    </div>

    <div class="row py-5 mt-5 justify-content-center">
        <div class="col-md-5 text-center list-group-item  ">
            <form>

                <div class="form-group p-1">
                {/*<label for="exampleInputEmail1">NUMERO DE MESAS</label>*/}
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Numero De Mesas"/>               
                </div>
                
                <div class="form-group p-1">
                {/*<label for="exampleInputPassword1">CAPACIDAD</label>*/}
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Capacidad"/>
                </div>
                
                
                <button type="submit" class="btn btn-primary fondo-ortellus mt-3">REGISTRAR</button>

            </form>
          

       </div>
    </div>
</div>
               

        </React.Fragment>


    )


}

export default GestionMesas;
