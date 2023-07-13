import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

const ModalAvisos = (props) =>{
    //VARIABLES QUE NECESITO PARA QUE FUNCIONE
    // const [tipoNotificacion, setTipoNotificacion] = useState(); LA NOTIFICACION PUEDE SER AVISO O NTOFICACION
    // const [mensajeNotificacion, setMensajeNotificacion] = useState(); MENSAJE QUE QUIERO QUE APAREZCA
    // const [modalAvisos, setModalAvisos] = useState(false); ESTO ABRE EL MODAL TRUE O FALSE
//METODO PARA UTILIZAR LAS NOTIFICACIONES
    // const handleNotificacion=(tipo,mensaje)=>{
    //     setTipoNotificacion(tipo);
    //     setMensajeNotificacion(mensaje);
    //     setModalShow(false);
    //     setModalAvisos(true);
             
    // }

   const apiUrl = process.env.REACT_APP_API_URL;
   const [respuesta, setRespuesta] = useState();
   var tipoNotificacion;
   if (props.tipo=='Confirmacion'){
    tipoNotificacion=true;
    
   }
   const refresh=()=>{window.location.reload()} 
   return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {tipoNotificacion ? (
                        <h2>CONFIRMACION</h2>
                    ):(
                        <h2>AVISO</h2>
                    )}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.mensaje}
            </Modal.Body>
            <Modal.Footer>
            {tipoNotificacion ? (
                        <div>
                            <Button onClick={()=> setRespuesta(true)} className='me-3 text-white' variant="warning"> Confirmar </Button>
                            <Button variant='secondary' onClick={props.onHide}>Cancelar</Button>
                        </div>
                    ):(
                        <Button onClick={()=>refresh()}>Close</Button>
                    )}
                
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAvisos;