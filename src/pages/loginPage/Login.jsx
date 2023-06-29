import './login_style.css';
import React, { useState } from 'react';
const logo = require('../images/logo.png');


export default function Login() {   
    const [ci,setCi] = useState();
    const [pass, setPass] = useState();

    const[passInput,setVisible] = useState(false);
    const[errorDiv,setVisibleDiv] = useState(false);
    const[error, setError] = useState();

    const[userDiv,setVisibleUserDiv] = useState(false);
    const[socio,setSocio] = useState();

    const[inputCI, setVisibleCI] = useState(true);
    
    var url = 'http://192.168.1.37:8000/api/Ingresos';
    var data = {"ci": parseInt(ci)};
    
    //Control de CI Utilizada
    const handleKeyPress = async(event) => {
        var respuesta;
        // Lógica para manejar la pulsación de teclas
        if (event.key == "Enter") {
             respuesta = await fetch (url,{
                method:'POST',
                headers:{'Content-Type': 'application/json'}, 
                body: JSON.stringify(data)
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => handleresponse(response));  
        }
    };

    const handleChange=e=>{
        setCi(e.target.value);
    }

    //Control de respuesta del back
    const handleresponse = (response) =>{
        if (response.respuesta == true) {
            setVisible(true)           
        }else{
            if (response.respuesta == 'Usuario no existe') {
                setError(response.respuesta);
                setVisibleDiv(true);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);                
            }else{
                setSocio(response);
                setVisibleCI(false);
                setVisibleUserDiv(true); 
                setTimeout(() => {
                    window.location.reload();
                }, 6500);
            }
        }
    }
    
    //Control de contraseña colocada.
    const handleChangePass=e=>{
        setPass(e.target.value);
    }

    const handleKeyPressPass = async(event) => {
        var respuesta;
        // Lógica para manejar la pulsación de teclas
        if (event.key == "Enter") {
            data = {'ci':ci, 'password': pass, 'Administrador':true}
             respuesta = await fetch (url,{
                method:'POST',
                headers:{'Content-Type': 'application/json'}, 
                body: JSON.stringify(data)
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => handlePassword(response));  
        }
    };

    //Control de respuesta del back
    const handlePassword = (response) =>{
        if (response.respuesta == 'Se valida el ingreso') {
            window.location = '/home'        
        }else{
            setError(response.respuesta);
            setVisibleDiv(true);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }
    return (  
        <div className='center-login'>
            <img src={logo} alt="Logo_gym" className="py-3 img-fluid image_logo"></img>
            <div className='text-center'>
                <h1 className='font-restaurant'>¡ BIENVENIDO !</h1>
            </div>
            
            {userDiv?(
            <div className='alert alert-success' role="alert">
                <h1>{socio.Nombre} {socio.Apellido}</h1>
                <h4>Te quedan {socio.DiasDeCuota} para el vencimiento de tu pase</h4>
            </div>):
            (false)}

            {inputCI? (
            <div className="py-4">
                <input type="text" 
                    autoFocus
                    className="form-control" 
                    value={ci} 
                    placeholder="Ingrese sú cédula" 
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    onKeyUp={handleKeyPress}
                />
                {passInput ? (<input type="password" 
                    className="form-control" 
                    value={pass} 
                    placeholder="Ingrese Contraseña" 
                    aria-describedby="basic-addon1"
                    onChange={handleChangePass}
                    onKeyUp={handleKeyPressPass}
                />):(false)}
            </div>):(false)}
            
            
            {errorDiv?(<div className='alert alert-danger' role='alert'>{error}</div>):(false)}
            
        </div>
    );
}