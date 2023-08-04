import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

const NewCompraModal = (props) =>{
    
   const [inputName,setValueName] = useState();
   const [selectProducto,setselectProducto] = useState();

   return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    REGISTRAR COMPRA
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='row mb-3'>
                    <div className='col-3 mb-2'>
                        <label htmlFor="floatingInputValue1">Cantidad: </label>
                        <input type="text" className="form-control" id="floatingInputValue1" placeholder='ej: Pepito' onChange={(event) => setValueName(event.target.value)}/>
                    </div>
                    <div className='col-9 mb-2'>
                        <label htmlFor="floatingInputValue2">Producto:</label>
                        <select className='form-select' name="" id="" onChange={(event) => setselectProducto(event.target.value)}></select>
                    </div>
    
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick=""> + Nueva Compra </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewCompraModal