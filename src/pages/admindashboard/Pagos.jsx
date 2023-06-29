import Navbar from "./components/navbar"
import Sidebar from './components/sidebar'
import Footerbar from './components/footerbar'
import Cards from "./widgets_pagos/card_usuario"
import React, { useState } from 'react';

const Pagos = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [inputCi,setValueCi] = useState();
  const [infosocio, setInfosocio] = useState();
  const [infopago, setInfopago] = useState();
  const [infoingresos, setInfoingresos] = useState();

  const handleHTTPGetUsuario = (inputCi) => {
   var data={ci:inputCi}
      fetch(apiUrl+':8000/api/Usuarios/'+inputCi, {
        method: 'GET'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          // Manipula los datos de respuesta
          setInfosocio(data);
          console.log(infosocio);
          console.log(data);
        })
        .catch(error => {
          // Maneja cualquier error de la solicitud
          console.error(error);
        });
    
  };
  const handleHTTPGetIngresos = (inputCi) => {
    var data={ci:inputCi}
       fetch(apiUrl+':8000/api/Usuarios/'+inputCi, {
         method: 'GET'
       })
         .then(response => {
           if (!response.ok) {
             throw new Error('Error en la solicitud');
           }
           return response.json();
         })
         .then(data => {
           // Manipula los datos de respuesta
           setInfosocio(data);
           console.log(infosocio);
           console.log(data);
         })
         .catch(error => {
           // Maneja cualquier error de la solicitud
           console.error(error);
         });
     
   }; 
   const handleHTTPGetCuotas = (inputCi) => {
    var data={ci:inputCi}
       fetch(apiUrl+':8000/api/Usuarios/'+inputCi, {
         method: 'GET'
       })
         .then(response => {
           if (!response.ok) {
             throw new Error('Error en la solicitud');
           }
           return response.json();
         })
         .then(data => {
           // Manipula los datos de respuesta
           setInfosocio(data);
           console.log(infosocio);
           console.log(data);
         })
         .catch(error => {
           // Maneja cualquier error de la solicitud
           console.error(error);
         });
     
   };  
  return (
        <div className='home'>
            <div className='row'>
                <div className='col-12 bg-dark'>
                    <Navbar/>
                </div>
                <div className='col-2 text-bg-dark'>
                     <Sidebar/>  
                </div>
                <div className='col-10'>
                    <div className='d-flex py-2 justify-content-start'>
                        <div className='input-group w-25'>
                            <input type="text" className='form-control' placeholder='Ingresar CI de Socio' onChange={(event) => setValueCi(event.target.value)}/>
                            <button onClick={() => handleHTTPGetUsuario(inputCi)} className='btn btn-primary'>Cargar Datos</button>
                        </div>
                    </div>
                    <div>
                        <Cards/>
                    </div>                    
                </div>
                <div className='col-12 footer text-bg-dark'>
                    <Footerbar/>
                </div>
            </div>
            
        </div>
    )
};

export default Pagos;


