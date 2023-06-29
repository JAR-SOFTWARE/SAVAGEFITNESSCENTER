import Navbar from "./components/navbar"
import Sidebar from './components/sidebar'
import Footerbar from './components/footerbar'
import Cards from "./widgets_pagos/card_usuario"
const pagos = () =>{
    return (
        <div className='home'>
            <div className='row'>
                <div className='col-12 bg-dark'>
                    <Navbar/>
                </div>
                <div className='col-2 text-bg-dark'>
                     <Sidebar/>  
                </div>
                <div className='col-10'>
                    <div className='d-flex py-2 justify-content-start'>
                        <div className='input-group w-25'>
                            <input type="text" className='form-control' placeholder='Ingresar CI de Socio'/>
                            <button className='btn btn-primary'>Cargar Datos</button>
                        </div>
                    </div>
                    <div>
                        <Cards/>
                    </div>                    
                </div>
                <div className='col-12 footer text-bg-dark'>
                    <Footerbar/>
                </div>
            </div>
            
        </div>
    )
}

export default pagos