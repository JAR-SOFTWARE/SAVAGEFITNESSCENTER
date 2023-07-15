import { useState,useEffect, Fragment } from "react";
import NewVentaModal from "./modal_venta";
import NewCompraModal from "./modal_compra"
import ModalAvisos from "../../../Utils/ModalAvisos";
const Transaction_table = () => {
//-------------------------------------------------------------------INICIO DE VARIABLES------------------------------------------------------------------->
    const apiUrl = process.env.REACT_APP_API_URL;
    const [ventas, setVentas] = useState([]);
    const [ventasDelDia, setVentasDelDia] = useState();
    const [compras, setCompras] = useState([]);
    const [comprasDelDia, setComprasDelDia] = useState();   
    const [fecha, setFecha] = useState(currentdate);
    const [modalVentaShow, setModalVentaShow] = useState();
    const [modalCompraShow, setModalCompraShow] = useState();
    const [tipoNotificacion, setTipoNotificacion] = useState(); 
    const [mensajeNotificacion, setMensajeNotificacion] = useState(); 
    const [modalAvisos, setModalAvisos] = useState(false);
    const [respuesta, setRespuesta] = useState();
    const [id, setId] = useState();
    const [valueOption, setValueOption] = useState(true);
    var date = new Date(); //Fecha actual
    var mes = date.getMonth()+1; //obteniendo mes
    var dia = date.getDate(); //obteniendo dia
    var ano = date.getFullYear(); //obteniendo año
    if(dia<10)dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)mes='0'+mes //agrega cero si el menor de 10
    var currentdate = ano+"-"+mes+"-"+dia;
//-------------------------------------------------------------------DECLARACION DE METODOS------------------------------------------------------------------->
const handleGETALL=(fecha)=>{
    setFecha(fecha);
    {valueOption?handleGetHTTPVentas(fecha):handleGetHTTPCompras(fecha)}
    handleGetHTTPComprasDelDia(fecha);
    handleGetHTTPVentasDelDia(fecha);
}
const handleGetHTTPVentas = async(fecha) =>{ 
    const url = apiUrl+':8000/api/Transacciones/Venta/'+fecha;
    const response =  fetch (url,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        setVentas(response.data);
    });
}
const handleGetHTTPVentasDelDia = async(fecha) =>{ 
    const url = apiUrl+':8000/api/Transacciones/VentasDelDia/'+fecha;
    const response =  fetch (url,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        setVentasDelDia(response);
    });
}
const handleGetHTTPCompras = async(fecha) =>{ 
    const url = apiUrl+':8000/api/Transacciones/Compra/'+fecha;
    const response =  fetch (url,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        setCompras(response.data);
    });
}
const handleGetHTTPComprasDelDia = async(fecha) =>{ 
    const url = apiUrl+':8000/api/Transacciones/ComprasDelDia/'+fecha;
    const response =  fetch (url,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        setComprasDelDia(response);
    });
}
const handleDelete = (id) => {
      fetch(apiUrl+':8000/api/Transacciones/'+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          // Manipula los datos de respuesta
          handleNotificacion('Aviso',data.respuesta,'');
          console.log(data);
        })
        .catch(error => {
          // Maneja cualquier error de la solicitud
          console.error(error);
        });
    
  }; 
const handleNotificacion=(tipo,mensaje,id)=>{
        setTipoNotificacion(tipo);
        setMensajeNotificacion(mensaje);
        setModalAvisos(true);
        setId(id);     
    }
//-------------------------------------------------------------------LOGICA DEL COMPONENTE------------------------------------------------------------------->
useEffect(() => {
    handleGetHTTPVentas(currentdate);
    handleGetHTTPVentasDelDia(currentdate);
    
},[])
useEffect(() => {
    if(respuesta==='true'){
      handleDelete(id);
    }
  }, [respuesta])
  console.log(valueOption);
    return(
        <Fragment>
            
            <div className="row mt-2">
                <div className="col-6">
                <div className="d-flex justify-content-start"> 
                <h2 className="border border-radius-5">FECHA SELECCIONADA: {fecha??currentdate}</h2>
                </div>
                    
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">    
                            <div className='input-group w-25 me-3'>
                                <input type="date" className='form-control' onChange={(event) => handleGETALL(event.target.value)} defaultValue={currentdate}/>
                            </div>
                            <div className='input-group w-25 me-3'>
                            <select className='form-select' onChange={(event) => setValueOption(event.target.value)}>
                                <option>Filtar por</option>
                                <option value={true}>Ventas del Día</option>
                                <option value={''}>Compras del Día</option>
                            </select>
                            </div>
                    </div>
                </div>
            </div>
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
                    <div className="row justify-content-end">
                    <div className="col-3">
                        <button className="btn btn-outline-success" onClick={() => setModalVentaShow(true)}> + Nueva Venta </button>
                    </div>
                    </div>
                    
                    
                    </div>
                    <div className="col-6">
             <div className="py-3">
                <div className="card border-danger">
                    <div className="card-header bg-danger text-white">
                        Compras del día
                    </div>
                    <div className="card-body">
                        <h2 className="card-body">${comprasDelDia??'0'}</h2>
                    </div>
                </div>
            </div>
            
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-danger" onClick={() => setModalCompraShow(true)}> + Nueva Compra </button>
            </div>
            
                    </div>
            </div>
                    
            <br />
            
            <div className="row">
                
                <div className="row border mt-2 mb-2"></div>
            <div className="row">
                {valueOption ? (
//---------------------------------------------------------------------------------TABLA PARA LAS VENTAS --------------------------------------------------------------------------------->
<Fragment>
    <div className="row">
        <div className="d-flex justify-content-start">
            <h2 className="mt-2">Ventas del día</h2>
        </div>
    </div>
                    <table className="table table-striped">  
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Vendedor</th>
                            <th>Cliente</th>
                            <th>Hora Transaccion</th>
                            <th>Precio Venta</th>
                            <th>Gestion</th>
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
                                    <th>
                                        <button onClick={() => handleNotificacion('Confirmacion','Desea Eliminar la Transaccion',venta.id)}  className='btn btn-outline-danger mx-2'>
                                            <i className='bi bi-trash'> </i>
                                        </button> 
                                    </th>
                                </tr>
                            ))}
                    </tbody>
                    
                </table>
</Fragment>
                ):(
//---------------------------------------------------------------------------------TABLA PARA LAS COMPRAS --------------------------------------------------------------------------------->
<Fragment>
    <div className="row">
        <div className="d-flex justify-content-start">
            <h2 className="mt-2">Compras del día</h2>
        </div>
    </div>
                    <table className="table table-striped">  
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Comprador</th>
                            <th>Hora Transaccion</th>
                            <th>Precio Compra</th>
                            <th>Gestion</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                   
                    </tbody>
                    
                </table>
</Fragment>
                )}
                
                
            </div>
           
            </div>
            
{/* -------------------------------------------------------------------MODALES-----------------------------------------------------------------------------------------------------------> */}
            <ModalAvisos 
            show={modalAvisos}
            onHide={() => setModalAvisos(false)}
            tipo={tipoNotificacion}
            mensaje={mensajeNotificacion}
            respuesta={respuesta}
            setRespuesta={setRespuesta}
            />
            <NewVentaModal
                        show={modalVentaShow}
                        onHide={() => setModalVentaShow(false)}
            />
            <NewCompraModal
                show={modalCompraShow}
                onHide={() => setModalCompraShow(false)}
            />   
        
</Fragment>
    )
   
    
}
export default Transaction_table