import { useState,useEffect } from "react";
import NewVentaModal from "./modal_venta";
import NewCompraModal from "./modal_compra"

const Transaction_table = () => {
//-------------------------------------------------------------------INICIO DE VARIABLES------------------------------------------------------------------->
    const apiUrl = process.env.REACT_APP_API_URL;
    const [ventas, setVentas] = useState([]);
    const [ventasDelDia, setVentasDelDia] = useState();   
    const [modalShow, setModalShow] = useState(); 
    var date = new Date(); //Fecha actual
    var mes = date.getMonth()+1; //obteniendo mes
    var dia = date.getDate(); //obteniendo dia
    var ano = date.getFullYear(); //obteniendo año
    if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
    mes='0'+mes //agrega cero si el menor de 10
    var currentdate = ano+"-"+mes+"-"+dia;
//-------------------------------------------------------------------DECLARACION DE METODOS------------------------------------------------------------------->
// const handleGetHTTPVentas=(fecha)=>{
//     console.log(fecha);
//     fetch(apiUrl+':8000/api/Transacciones/Venta/'+fecha, {
//         method: 'GET'
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Error en la solicitud');
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Manipula los datos de respuesta
//           console.log(data.data[0]);
//           setVentas(data.data[0]);
//         })
//         .catch(error => {
//           // Maneja cualquier error de la solicitud
//           console.error(error);
//         });
// }
const handleGETALL=(fecha)=>{
    
    handleGetHTTPVentas(fecha);
    handleGetHTTPVentasDelDia(fecha);
}
const handleGetHTTPVentas = async(fecha) =>{ 
    const url = apiUrl+':8000/api/Transacciones/Venta/'+fecha;
    console.log(url);
    const response =  fetch (url,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log(response.data);
        setVentas(response.data);
    });
}
const handleGetHTTPVentasDelDia = async(fecha) =>{ 
    const url = apiUrl+':8000/api/Transacciones/VentasDelDia/'+fecha;
    console.log(url);
    const response =  fetch (url,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        setVentasDelDia(response);
    });
}
useEffect(() => {
  
    handleGetHTTPVentas(currentdate);
    handleGetHTTPVentasDelDia(currentdate);
    
},[])

    return(
        <div>
            <div className="row">
            <div className="col-6">
                    <div className="py-3">
                        <div className="card border-success">
                            <div className="card-header bg-success text-white">
                                Ventas del día
                            </div>
                            <div className="card-body">
                                <h2 className="card-body">${ventasDelDia??'0'}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-success" onClick={() => setModalShow(true)}> + Nueva Venta </button>
                    </div>
                    <NewVentaModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </div>
                    <div className="col-6">
             <div className="py-3">
                <div className="card border-danger">
                    <div className="card-header bg-danger text-white">
                        Compras del día
                    </div>
                    <div className="card-body">
                        <h2 className="card-body">$ 1000.00</h2>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-danger" onClick={() => setModalShow(true)}> + Nueva Compra </button>
            </div>
            <NewCompraModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
                    </div>
            </div>
                    
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
                                <input type="date" className='form-control' onChange={(event) => handleGETALL(event.target.value)} defaultValue={currentdate}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-6">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Vendedor</th>
                        <th>Cliente</th>
                        <th>Hora Transaccion</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                {ventas.map((venta) => (
                            <tr key={venta.id}>
                                <th scope="row">{venta.id}</th>
                                <th>{venta.Producto}</th>
                                <th>{venta.Vendedor}</th>
                                <th>{venta.Cliente}</th>
                                <th>{venta.HoraTransaccion}</th>
                                <th>{venta.Precio}</th>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
            <div className="col-6">
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
            </div>
            
            
        </div>
    )
}
export default Transaction_table