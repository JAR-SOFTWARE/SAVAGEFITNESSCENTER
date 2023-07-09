import Navbar from "./components/navbar"
import Sidebar from './components/sidebar'
import Footerbar from './components/footerbar'
import Cards from "./widgets_pagos/card_usuario"
import React, { useState } from 'react';
import { Spinner } from "react-bootstrap";
import ModalAvisos from "../../Utils/ModalAvisos";

const Pagos = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [inputCi,setValueCi] = useState();
  const [infosocio, setInfosocio] = useState();
  const [infopago, setInfopago] = useState();
  const [infoingresos, setInfoingresos] = useState();
  const [isLoading, setisLoading] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [titulo, settitulo] = useState();
  const [mensaje, setmensaje] = useState();
  const [diasDeCuota, setdiasDeCuota] = useState();
  const [contador, setcontador] = useState();

  const handleHTTPGetUsuario = (inputCi) => {
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
          console.log(data);
        })
        .catch(error => {
          // Maneja cualquier error de la solicitud
          console.error(error);
        });
    
  };
  const handleHTTPGetIngresos = (inputCi) => {
       fetch(apiUrl+':8000/api/Ingresos/'+inputCi, {
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
           setInfoingresos(data);
         })
         .catch(error => {
           // Maneja cualquier error de la solicitud
           console.error(error);
         });
     
   }; 
   const handleHTTPGetCuotas = (inputCi) => {
       fetch(apiUrl+':8000/api/Cuotas/'+inputCi, {
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
           setInfopago(data);
           console.log(data);
         })
         .catch(error => {
           // Maneja cualquier error de la solicitud
           console.error(error);
         });
     
   };
   const handleHTTPGetDiasDeCuota = (inputCi) => {
    var data = {"ci": parseInt(inputCi)};

    fetch(apiUrl+':8000/api/Ingresos', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        // Manipula los datos de respuesta
        setdiasDeCuota(data.DiasDeCuota);
        console.log(data.DiasDeCuota);
      })
      .catch(error => {
        // Maneja cualquier error de la solicitud
        console.error(error);
      });
  
};
   const handleHTTPGetInformacionCompleta=(inputCi)=>{   
    handleHTTPGetDiasDeCuota(inputCi);
    handleHTTPGetUsuario(inputCi);
    handleHTTPGetIngresos(inputCi);
    handleHTTPGetCuotas(inputCi);
    
    
   }  
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
                            <input type="text" className='form-control me-2' placeholder='Ingresar CI de Socio' onChange={(event) => setValueCi(event.target.value)}/>
                            <button onClick={() => handleHTTPGetInformacionCompleta(inputCi)} className='btn btn-primary'>Cargar Datos</button>
                        </div>
                        <div className='ms-3 input-group w-25'>
                            <button onClick={() => setcontador(0)} className='btn btn-primary'>Limpiar</button>
                        </div>
                    </div>
                    <div>
                    <ModalAvisos
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    titulo={titulo}
                    mensaje={mensaje}
                />
                        <Cards infoingresos={infoingresos} infopago={infopago} infosocio={infosocio} diasDeCuota={diasDeCuota} contador />
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

