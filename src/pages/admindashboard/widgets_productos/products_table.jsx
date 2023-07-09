import { useState } from "react";
import NewProductModal from './new_product_modal';
const Products_table = () => {
    
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    var currentdate = ano+"-"+mes+"-"+dia;

    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <div className='d-flex py-2 justify-content-start'>
                 <div className='input-group w-25'>
                    <input type="text" className='form-control'/>
                    <button className='btn btn-primary'><i className="bi bi-search"></i></button>
                </div>
                <button className='btn btn-outline-success mx-2' variant="primary" onClick={() => setModalShow(true)}>
                    <i className='bi bi-cart-plus'></i>
                </button>
                <NewProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Precio Compra</th>
                        <th>Precio Venta</th>
                        <th>Stock</th>
                        <th>Lote</th>
                        <th>Fecha de Vencimiento</th>
                        <th>Fecha de Ingreso</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
export default Products_table