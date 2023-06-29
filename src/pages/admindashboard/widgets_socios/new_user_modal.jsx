import './widgets_socios.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

const NewUserModal = (props) =>{
    
   const [inputCi,setValueCi] = useState();
   const [inputName,setValueName] = useState();
   const [inputApellido,setValueApellido] = useState();
   const [inputCorreo,setValueCorreo] = useState();
   const [inputTelefono,setValueTelefono] = useState();
   const [inputFecha, setValueFecha] = useState();
   const [selectSexo,getvalueSexo] = useState();
   const [selectOpt,getValueOpt] = useState();
   
   async function sendRequest() {
    var data = {}
    selectOpt == 'Administrador'? data = {
        ci: inputCi, 
        Nombre: inputName, 
        Apellido: inputApellido, 
        Mail: inputCorreo, 
        Telefono: inputTelefono,
        FechaDeNacimiento: inputFecha,
        Sexo: selectSexo,
        Opcion: selectOpt,
        password: inputCi
     } : 
     data = { ci: inputCi, 
        Nombre: inputName, 
        Apellido: inputApellido, 
        Mail: inputCorreo, 
        Telefono: inputTelefono,
        FechaDeNacimiento: inputFecha,
        Sexo: selectSexo,
        Opcion: selectOpt
     }
     console.log(data)
    //  var url = 'http://192.168.1.37:8000/api/Usuarios';
    //     await fetch (url,{
    //         method:'POST',
    //         headers:{'Content-Type': 'application/json'}, 
    //         body: JSON.stringify(data)
    //     }).then(res => res.json())
    //     .catch(error => console.error('Error:', error))
    //     .then(response => handleresponse(response));  
   }

   const handleresponse = (response) =>{
    console.log(response);
   }
   return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    NUEVO USUARIO DEL SISTEMA
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='row mb-3'>
                    <h4 className='text-uppercase mb-3'>Datos Personales </h4>
                    <div className='col-2 mb-2'>
                        <label htmlFor="floatingInputValue">Cédula</label>
                        <input type="text" className="form-control" id="floatingInputValue" placeholder='ej: 12345678' onChange={(event) => setValueCi(event.target.value)}/>
                    </div>
                    <div className='col-5 mb-2'>
                        <label htmlFor="floatingInputValue1">Nombre: </label>
                        <input type="text" className="form-control" id="floatingInputValue1" placeholder='ej: Pepito' onChange={(event) => setValueName(event.target.value)}/>
                    </div>
                    <div className='col-5 mb-2'>
                        <label htmlFor="floatingInputValue2">Apellido:</label>
                        <input type="text" className="form-control" id="floatingInputValue2" placeholder='ej: Rodriguez' onChange={(event) => setValueApellido(event.target.value)} />
                    </div>
                    <div className='col-4 mb-2'>
                        <label htmlFor="floatingInputValue3">Sexo: </label>
                        <select className='form-select' name="" id="floatingInputValue3" onChange={(event) => getvalueSexo(event.target.value)}>
                            <option value="Mujer">Femenino</option>
                            <option value="Hombre">Masculino</option>
                            <option value="Sin definir">Sin Definir</option>
                        </select>
                    </div>
                    <div className='col-4 mb-2'>
                        <label htmlFor="floatingInputValue4">Fecha de Nacimiento: </label>
                        <input type="date" className="form-control" id="floatingInputValue4" onChange={(event) => setValueFecha(event.target.value)} />
                    </div>
                    <div className='col-6 mb-3'>
                        <label htmlFor="floatingInputValue5">Correo: </label>
                        <input type="text" className="form-control" id="floatingInputValue5" placeholder='ej: example@gmail.com'onChange={(event) => setValueCorreo(event.target.value)}/>
                    </div>
                    <div className='col-6 mb-3'>
                        <label htmlFor="floatingInputValue6">Telefono:</label>
                        <input type="text" className="form-control" id="floatingInputValue6" placeholder='ej: 099999999' onChange={(event) => setValueTelefono(event.target.value)}/>
                    </div>
                    <hr className='text-secondary mb-3'/>
                    <div className='col-4'>
                        <label htmlFor="floatingInputValue7">Opcion:</label>
                        <select className='form-select' name="" id="floatingInputValue7" onChange={(event) => getValueOpt(event.target.value)}>
                            <option value="Administrador">Administrador</option>
                            <option value="Cliente">Socio</option>
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => sendRequest()}> Crear </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewUserModal