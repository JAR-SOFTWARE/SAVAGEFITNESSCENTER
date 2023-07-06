import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
const ModalAvisos = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);
    const [titulo, settitulo] = useState();
    const [mensaje, setmensaje] = useState()
    function handleMessage(respuesta){
        setModalShow(true);
        settitulo('AVISO');
        setmensaje(respuesta);
    }
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.titulo}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='row mb-3'>
                    <h4 className='text-uppercase mb-3'>{props.mensaje}</h4>
                    
                </form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="success" > Crear </Button> */}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalAvisos;