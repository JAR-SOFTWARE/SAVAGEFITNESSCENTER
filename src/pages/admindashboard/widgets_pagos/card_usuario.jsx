import { useEffect,useState } from "react";
import Cookies from 'js-cookie';
import ModalAvisos from "../../../Utils/ModalAvisos";

const Cards = ({infoingresos,infopago,infosocio,diasDeCuota}) =>{
    const apiUrl = process.env.REACT_APP_API_URL;
    const [modalShow, setModalShow] = useState(false);
    const [titulo, settitulo] = useState();
    const [mensaje, setmensaje] = useState()
    const [claseCSS, setclaseCSS] = useState("form-control text-white bg-success");
    const [texto, settexto] = useState('HABILITADO');
    const handleMessage=(respuesta)=>{
        setModalShow(true);
        settitulo('AVISO');
        setmensaje(respuesta);
    }
console.log(diasDeCuota);
   if(diasDeCuota='Su cuota esta vencida'){
    console.log('prueba');
    //setclaseCSS("form-control text-white bg-danger")
   }
    const RegistroDeCuota=(inputCi)=>{   
        
        const data = {
            ci:Cookies.get('Sesion'),
            socios_ci: inputCi,
            productos_id:1,
            TipoDeTransaccion:"Venta",
          };
          fetch(apiUrl+':8000/api/Transacciones', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Error en la solicitud');
              }
              return response.json();
            })
            .then(data => {
              // Manipula los datos de respuesta
              handleMessage(data.respuesta);
            })
            .catch(error => {
              // Maneja cualquier error de la solicitud
              console.error(error);
            });
       }  
    return (
        <div className="card w-100 h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">
                    DATOS DEL SOCIO
                </h5>
            </div>
            <div className="row card-body">
                <div className="col-6">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputValue2" placeholder="name@example.com" value={infosocio?.ci} disabled/>
                        <label htmlFor="floatingInputValue2">Cédula</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputValue1" placeholder="name@example.com" value={infosocio?infosocio.Nombre+" "+infosocio.Apellido:""}  disabled/>
                        <label htmlFor="floatingInputValue1">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputValue3" placeholder="name@example.com" value={infosocio?.Mail} disabled/>
                        <label htmlFor="floatingInputValue3">Correo</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputValue3" placeholder="Telefono" value={infosocio?.Telefono} disabled/>
                        <label htmlFor="floatingInputValue3">Telefono</label>
                    </div>
                </div>
                
                <div className="col-2 form-floating mb-3">
                    <input type="text" className={claseCSS} id="floatingInputValue4" placeholder="name@example.com" value={texto} disabled/>
                    <label htmlFor="floatingInputValue4">Estado</label>
                </div>
                <div className="col-2 form-floating mb-3" >
                    <button onClick={() => RegistroDeCuota(infosocio.ci)} className="btn btn-primary w-100">Registrar Cuota</button>
                </div>
                <ModalAvisos
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    titulo={titulo}
                    mensaje={mensaje}
                />
            </div>
            <div className="row card-body">
                <div className="col-6">
                <p> INGRESOS </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Fecha Ingreso</th>
                        <th scope="col">Hora Ingreso</th>
                        </tr>
                    </thead>
                    <tbody>
                    {infoingresos?.map((ingreso) => (
                            <tr key={ingreso.id}>
                                <td>{ingreso.FechaIngreso}</td>
                                <td>{ingreso.HoraIngreso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="col-6">
                <p> CUOTAS ABONADAS </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Fecha de Pago</th>
                        <th scope="col">Hora de Pago</th>
                        <th scope="col">Cedula de Cobrador </th>
                        </tr>
                    </thead>
                    <tbody>
                    {infopago?.map((pago) => (
                            <tr key={pago.id}>
                                <td>{pago.FechaTransaccion}</td>
                                <td>{pago.HoraTransaccion}</td>
                                <td>{pago.usuarios_ci}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
            </div>
        </div>
    )
}

export default Cards