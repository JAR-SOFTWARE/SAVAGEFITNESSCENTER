import { useState } from "react";

const Transaction_table = () => {
    
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    var currentdate = ano+"-"+mes+"-"+dia;

    return(
        <div>
            <div className="row py-3">
                <div className='col-2'>
                    <div className='input-group w-100'>
                        <input type="text" className='form-control'/>
                        <button className='btn btn-primary'><i className="bi bi-search"></i></button>
                    </div>
                </div>
                <div className='col-10'>
                    <div className="">    
                        <div className="d-flex justify-content-end">    
                            <div className='input-group w-25'>
                                <input type="date" className='form-control' defaultValue={currentdate}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Precio Venta</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
export default Transaction_table