import Navbar from "./components/navbar"
import Sidebar from './components/sidebar'
import Footerbar from './components/footerbar'
import BoxCompra from "./widgets_caja/box_compra"
import BoxVenta from "./widgets_caja/box_venta"
import Transaction_table from "./widgets_caja/table_transacciones"
const caja = () =>{
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
                    <div className="row">
                        <BoxVenta/>
                        <BoxCompra/>
                        <Transaction_table/>
                    </div>
                </div>
                <div className='col-12 footer text-bg-dark'>
                    <Footerbar/>
                </div>
            </div>
            
        </div>
    )
}

export default caja