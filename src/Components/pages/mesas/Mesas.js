import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


const Mesas = () => {



    return (


        <React.Fragment>

<div class="container">

    <div className='row justify-content-end px-0 mt-4'>
        <div className='col-md-5 bg-info'>
            <h2>GESTIONA TUS MESAS</h2>
        </div>
    </div>

    <div class="row py-5 mt-5 justify-content-center">
        <div class="col-md-5 text-center list-group-item  ">
            <form>

                <div class="form-group p-1">
                {/*<label for="exampleInputEmail1">NUMERO DE MESAS</label>*/}
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Numero De Mesas"/>               
                </div>
                
                <div class="form-group p-1">
                {/*<label for="exampleInputPassword1">CAPACIDAD</label>*/}
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Capacidad"/>
                </div>
                
                
                <button type="submit" class="btn btn-primary">REGISTRAR</button>

            </form>
            <Link to="equis" className='text-dark'>ir a x</Link>

       </div>
    </div>
</div>
               

        </React.Fragment>


    )


}

export default Mesas;