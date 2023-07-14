import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState,useEffect} from 'react';

const Modal_confirmacion = (props) =>{
    //VARIABLES QUE NECESITO PARA QUE FUNCIONE
    // const [tipoNotificacion, setTipoNotificacion] = useState(); LA NOTIFICACION PUEDE SER AVISO O NTOFICACION
    // const [mensajeNotificacion, setMensajeNotificacion] = useState(); MENSAJE QUE QUIERO QUE APAREZCA
    
    const [modalAvisos, setModalAvisos] = useState(false);
    
//METODO PARA UTILIZAR LAS NOTIFICACIONES
    // const handleNotificacion=(tipo,mensaje)=>{
    //     setTipoNotificacion(tipo);
    //     setMensajeNotificacion(mensaje);
    //     setModalShow(false);
    //     setModalAvisos(true);
             
    // }
   
const apiUrl = process.env.REACT_APP_API_URL;
var tipoNotificacion;

const refresh=()=>{window.location.reload()} 

const handleResponse=()=>{
    setModalAvisos(false);
    props.setRespuesta('true');       
}

   return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h5>CONFIRMACION</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.mensaje}
            </Modal.Body>
            <Modal.Footer>
                <div>
                    <Button onClick={()=> handleResponse()} className='me-2 text-white' variant="success">SI</Button>
                    <Button variant='danger' onClick={props.onHide}>NO</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Modal_confirmacion;