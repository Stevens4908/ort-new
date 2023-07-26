import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const AgregarEquipo = () => {

    return (


        <React.Fragment>

<div className="container">

    <div className='row justify-content-end px-0 mt-4'>
        <div className='col-md-5 fondo-ortellus bordes'>
            <h2 className='text-white'>COMPLETA TUS DATOS</h2>
        </div>
    </div>

    <div className="row py-5 justify-content-center">
        <div className="col-md-6 text-center list-group-item list-group-item">
            <form className='py-5'>
                
                <div className="form-group p-1">
                {/*<label for="exampleInputEmail1">NOMINA</label>*/}
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nomina"/>             
                </div>

                <div className="form-group p-1">
                {/*<label for="exampleInputPassword1">NOMBRE</label>*/}
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nombre"/>
                </div>

                <div className="form-group p-1">
                    {/*<label for="exampleInputPassword1">CEDULA</label>*/}
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Cedula"/>
                </div>

                <div className="form-group p-1">
                    {/*<label for="exampleInputPassword1">TELEFONO</label>*/}
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Telefono"/>
                </div>

                <div className="form-group p-1">
                    {/*<label for="exampleInputPassword1">CARGO</label>*/}
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Cargo"/>
                </div>

                <div className="form-group p-1">
                   {/*<label for="exampleInputPassword1">DIRECCION</label>*/} 
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Direccion"/>
                </div>
                
                <button type="submit" class="btn btn-primary fondo-ortellus mt-4">REGISTRAR</button>

            </form>
      </div>
    </div>

</div>

        </React.Fragment>


    )


}

export default AgregarEquipo;