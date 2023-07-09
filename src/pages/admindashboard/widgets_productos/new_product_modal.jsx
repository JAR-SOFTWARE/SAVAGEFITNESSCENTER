import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

const NewProductModal = (props) =>{
    
   const [inputName,setValueName] = useState();
   const [inputDescripcion,setDescripcion] = useState();
   const [inputPrecioCompra,setPrecioCompra] = useState();
   const [inputPrecioVenta,setPrecioVenta] = useState();
   const [inputStock, setStock] = useState();
   const [inputLote,setLote] = useState();
   const [inputFechaDeVencimiento,setFechaDeVencimiento] = useState();
   const [inputFechaDeIngreso,setFechaDeIngreso] = useState();

   return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    NUEVO PRODUCTO
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='row mb-3'>
                    <h6 className='text-uppercase mb-3'>DATOS DEL PRODUCTO </h6>
                    <div className='col-6 mb-2'>
                        <label htmlFor="floatingInputValue1">Nombre: </label>
                        <input type="text" className="form-control" id="floatingInputValue1" placeholder='ej: Pepito' onChange={(event) => setValueName(event.target.value)}/>
                    </div>
                    <div className='col-6 mb-2'>
                        <label htmlFor="floatingInputValue2">Descripción:</label>
                        <input type="text" className="form-control" id="floatingInputValue2" placeholder='ej: Rodriguez' onChange={(event) => setDescripcion(event.target.value)} />
                    </div>
                    <div className='col-2 mb-2'>
                        <label htmlFor="floatingInputValue3">Precio Compra: </label>
                        <input type="text" className="form-control" id="floatingInputValue2" placeholder='ej: Rodriguez' onChange={(event) => setPrecioCompra(event.target.value)} />
                    </div>
                    <div className='col-2 mb-2'>
                        <label htmlFor="floatingInputValue4">Precio Venta: </label>
                        <input type="text" className="form-control" id="floatingInputValue4" onChange={(event) => setPrecioVenta(event.target.value)} />
                    </div>
                    <div className='col-1 mb-3'>
                        <label htmlFor="floatingInputValue5">Stock: </label>
                        <input type="text" className="form-control" id="floatingInputValue5" placeholder='ej: example@gmail.com'onChange={(event) => setStock(event.target.value)}/>
                    </div>
                    <div className='col-2 mb-3'>
                        <label htmlFor="floatingInputValue6">Lote:</label>
                        <input type="text" className="form-control" id="floatingInputValue6" placeholder='ej: 099999999' onChange={(event) => setLote(event.target.value)}/>
                    </div>
                    <div className='col-2 mb-3'>
                        <label htmlFor="floatingInputValue6">Fecha de Vencimiento:</label>
                        <input type="date" className="form-control" id="floatingInputValue6" placeholder='ej: 099999999' onChange={(event) => setFechaDeVencimiento(event.target.value)}/>
                    </div>
                    <div className='col-2 mb-3'>
                        <label htmlFor="floatingInputValue6">Fecha de Ingreso:</label>
                        <input type="date" className="form-control" id="floatingInputValue6" placeholder='ej: 099999999' onChange={(event) => setFechaDeIngreso(event.target.value)}/>
                    </div>
    
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick=""> Crear </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewProductModal