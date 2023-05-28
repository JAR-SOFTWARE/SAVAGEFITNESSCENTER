//VARIABLES
var tbody_cMarcas=document.getElementById('tbody-cMarcas');
var tbody_cPagos=document.getElementById('tbody-cPagos');
var div_mensaje_habilitado=document.getElementById('div_msg_pagos');
var h3_div_mensaje_habilitado=document.getElementById("H3_div_msg_pagos");
var mensaje= document.querySelector('.mensaje');
var hoy = new Date();
var fecha = hoy.getDate() + '-0' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var resultado;
var prueba=[];
function cFechas(fecha1,fecha2){
   //NOTA: PRIMER FECHA DEBE SER MAS GRANDE Y EN FORMATO DD-MM-AAAA, SEGUNDA FECHA TIENE QUE INGRESAR CON FORMATO AAAA-MM-DD
   //NOTA: variable fecha contiene el dia actual
    var fecha1split=fecha1.split('-');
    var fecha1dia=fecha1split[0];
    var fecha1mes=fecha1split[1];
    var fecha1año=fecha1split[2];
    var fecha2split=fecha2.split('-');
    var fecha2dia=fecha2split[2];
    var fecha2mes=fecha2split[1];
    var fecha2año=fecha2split[0];
    
  if (fecha1mes-fecha2mes==1){
    let diasdiferentes=fecha1dia-fecha2dia+30;
    return diasdiferentes
  }
  else{
    let diasdiferentes=fecha1dia-fecha2dia;
    return diasdiferentes
  }
}
//PRUEBA

//CIERRA PRUEBA
/*********SECCION DE LOGIN**************************************************************************** */
$('#txt-ci').keypress(function (e) { 
    let tecla = e.keyCode; 
    if (tecla == '13'){
        e.preventDefault();
        userCheck();
    }  
});
/***************************************************************************************************** */
function userCheck(){
  console.log(fecha);
    $.ajax({
        type: "POST",
        url: "./php/usuarios.php",
        datatype: 'json',
        data:
        {
            ci:$('#txt-ci').val(),
            op:'1'
        }
    }).done(function(datos){
      console.log(datos);
        js = JSON.parse(datos);
        if (js == '2'){
          //INGRESA ADMINISTRADOR
          window.location.replace("./modulos/administrador.html");
        }
        if (js =='1'){
          //INGRESA USUARIO
          aMarca();
          vUsuario($('#txt-ci').val());
          cDiasdePago($('#txt-ci').val());
        }
        $('#txt-ci').val('');
    }).fail( function( jqXHR, textStatus, errorThrown ) {
  
            if (jqXHR.status === 0) {
        
            alert('Not connect: Verify Network.');
        
            } else if (jqXHR.status == 404) {
        
            alert('Requested page not found [404]');
        
            } else if (jqXHR.status == 500) {
        
            alert('Internal Server Error [500].');
        
            } else if (textStatus === 'parsererror') {
        
            alert('Requested JSON parse failed.');
        
            } else if (textStatus === 'timeout') {
        
            alert('Time out error.');
        
            } else if (textStatus === 'abort') {
        
            alert('Ajax request aborted.');
        
            } else {
        
            alert('Uncaught Error: ' + jqXHR.responseText);
        
            }
        
        });
}
function vUsuario(ci){
    $.ajax({
        type: "POST",
        url: "./php/usuarios.php",
        datatype: 'JSON',
        data:
        {
            ci:ci,
            op:'2'
        }
    }).done(function(datos){
       console.log(datos);
       showMessage(js=JSON.parse(datos));
    }).fail( function( jqXHR, textStatus, errorThrown ) {
  
            if (jqXHR.status === 0) {
        
            alert('Not connect: Verify Network.');
        
            } else if (jqXHR.status == 404) {
        
            alert('Requested page not found [404]');
        
            } else if (jqXHR.status == 500) {
        
            alert('Internal Server Error [500].');
        
            } else if (textStatus === 'parsererror') {
        
            alert('Requested JSON parse failed.');
        
            } else if (textStatus === 'timeout') {
        
            alert('Time out error.');
        
            } else if (textStatus === 'abort') {
        
            alert('Ajax request aborted.');
        
            } else {
        
            alert('Uncaught Error: ' + jqXHR.responseText);
        
            }
        
        });
}
function showMessage(user) {
    console.log(user[0].FechaUltimoPago);
    let Cuota=cFechas(fecha,user[0].FechaUltimoPago);
    let resto=30-Cuota;
    
    mensaje.removeAttribute('hidden','');
    mensaje.innerHTML = '<h1 style="border-radius: 10px;padding: 10px;" class="bg-success mb-3 ">BIENVENIDO '+user[0].nom+' '+user[0].ape+'</h1>'+
    '<h3 style="border-radius: 10px;padding: 10px;" class="text-white mb-3">Queremos recordarle que su cuota se vence en '+resto+' dias</h3>'+
    '<h3 class="text-white mb-3">Gracias por preferirnos</h3>';
    setTimeout(()=>{
        location.reload();
        mensaje.setAttribute('hidden','');
    },4000);
    
}
/***************************************************************************************************** */
/*********GESTION DE USUARIOS**************************************************************************** */
/*********ALTA**************************************************************************** */
$('#btnreg-user').click(function(){
    $.ajax({
        url: '../php/usuarios.php',
        type:'POST',
        dataType: 'text',
        data:{
            ci:$('#form-ci').val(),
            nom:$('#form-nom').val(),
            ape:$('#form-ape').val(),
            tel:$('#form-tel').val(),
            email:$('#form-email').val(),
            fnac:$('#form-fnac').val(),
            tipo:$('#tipo').val(),
            op:'4'
        }
    }).done(function(data){
        console.log(data);
        $('#form-ci').val('');
        $('#form-nom').val('');
        $('#form-ape').val('');
        $('#form-tel').val('');
        $('#form-email').val('');
        $('#form-fnac').val('');
        location.reload();
        
    }).fail( function( jqXHR, textStatus, errorThrown ) {
  
  if (jqXHR.status === 0) {
  
    alert('Not connect: Verify Network.');
  
  } else if (jqXHR.status == 404) {
  
    alert('Requested page not found [404]');
  
  } else if (jqXHR.status == 500) {
  
    alert('Internal Server Error [500].');
  
  } else if (textStatus === 'parsererror') {
  
    alert('Requested JSON parse failed.');
    
  } else if (textStatus === 'timeout') {
  
    alert('Time out error.');
  
  } else if (textStatus === 'abort') {
  
    alert('Ajax request aborted.');
  
  } else {
  
    alert('Uncaught Error: ' + jqXHR.responseText);
  
  }
  
  });
   
  })
/*********BAJA**************************************************************************** */
function bUser(ci) {
  $.ajax({
    url: '../php/usuarios.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:ci,
      op:'6'
    }
}).done(function(datos){
    console.log(datos);
    location.reload();
}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
    
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
}
/*********MODIFICACION**************************************************************************** */
function cModalCliente(ci,nom,ape,tel,email) {
  $('#form-ci-mod').val(ci);
  $('#form-nom-mod').val(nom);
  $('#form-ape-mod').val(ape);
  $('#form-tel-mod').val(tel);
  $('#form-email-mod').val(email);
}
function mUser() {
  $.ajax({
    url: '../php/usuarios.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:$('#form-ci-mod').val(),
      nom:$('#form-nom-mod').val(),
      ape:$('#form-ape-mod').val(),
      tel:$('#form-tel-mod').val(),
      email:$('#form-email-mod').val(),
      op:'5'
    }
}).done(function(datos){
    console.log(datos);
    location.reload();
}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
    
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
}
/*********CONSULTA**************************************************************************** */
function cUser(){
    const tbody=document.getElementById('tbody-user');
    $.ajax({
        url: '../php/usuarios.php',
        type:'POST',
        dataType: 'text',
        data:{
            op:'3'
        }
    }).done(function(datos){
      console.log(datos);
      var js=JSON.parse(datos);
      var i=0;
      tbody.innerHTML="";
      for(var i=0; i<js.length; i++){
        tbody.innerHTML=tbody.innerHTML+
        '<tr class="table-active">'+
        '<th scope="row">'+js[i].ci+'</th>'+
        '<td>'+js[i].nom+'</td>'+
        '<td>'+js[i].ape+'</td>'+
        '<td>'+js[i].tel+'</td>'+
        '<td>'+js[i].email+'</td>'+
        '<td>'+js[i].f_nac+'</td>'+
        '<td colspan="2"><button onclick="cModalCliente('+'\''+js[i].ci+''+'\','+'\''+js[i].nom+''+'\','+'\''+js[i].ape+''+'\','+'\''+js[i].tel+''+'\','+'\''+js[i].email+''+'\');" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-mod-clientes">Modificar</button><button onclick="bUser('+js[i].ci+');" class="btn btn-danger">Eliminar</button></td>'
        '</tr>';
      }
      
    }).fail( function( jqXHR, textStatus, errorThrown ) {
  
            if (jqXHR.status === 0) {
        
            alert('Not connect: Verify Network.');
        
            } else if (jqXHR.status == 404) {
        
            alert('Requested page not found [404]');
        
            } else if (jqXHR.status == 500) {
        
            alert('Internal Server Error [500].');
        
            } else if (textStatus === 'parsererror') {
        
            alert('Requested JSON parse failed.');
        
            } else if (textStatus === 'timeout') {
        
            alert('Time out error.');
        
            } else if (textStatus === 'abort') {
        
            alert('Ajax request aborted.');
        
            } else {
        
            alert('Uncaught Error: ' + jqXHR.responseText);
        
            }
        
        });
}
function cUserr(){
  let txtci=$('#txt-ci').val();
  if(txtci===""){
    console.log('esta vacio');
    cUser();
  }
  else{
  const tbody=document.getElementById('tbody-user');
  $.ajax({
      url: '../php/usuarios.php',
      type:'POST',
      dataType: 'text',
      data:{
          ci:$('#txt-ci').val(),
          op:'2'
      }
  }).done(function(datos){
      var js=JSON.parse(datos);
      var i=0;
      tbody.innerHTML="";
      for(var i=0; i<js.length; i++){
        tbody.innerHTML+=tbody.innerHTML+
        '<tr class="table-active">'+
        '<th scope="row">'+js[i].ci+'</th>'+
        '<td>'+js[i].nom+'</td>'+
        '<td>'+js[i].ape+'</td>'+
        '<td>'+js[i].tel+'</td>'+
        '<td>'+js[i].email+'</td>'+
        '<td>'+js[i].f_nac+'</td>'+
        '<td colspan="2"><button onclick="cModalCliente('+'\''+js[i].ci+''+'\','+'\''+js[i].nom+''+'\','+'\''+js[i].ape+''+'\','+'\''+js[i].tel+''+'\','+'\''+js[i].email+''+'\');" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-mod-clientes">Modificar</button><button onclick="bUser('+js[i].ci+');" class="btn btn-danger">Eliminar</button></td>'
        '</tr>';
      }
    

    
  }).fail( function( jqXHR, textStatus, errorThrown ) {

          if (jqXHR.status === 0) {
      
          alert('Not connect: Verify Network.');
      
          } else if (jqXHR.status == 404) {
      
          alert('Requested page not found [404]');
      
          } else if (jqXHR.status == 500) {
      
          alert('Internal Server Error [500].');
      
          } else if (textStatus === 'parsererror') {
      
          alert('Requested JSON parse failed.');
      
          } else if (textStatus === 'timeout') {
      
          alert('Time out error.');
      
          } else if (textStatus === 'abort') {
      
          alert('Ajax request aborted.');
      
          } else {
      
          alert('Uncaught Error: ' + jqXHR.responseText);
      
          }
      
      });
  }
  
}
/*********GESTION DE MARCAS******************************************************************************************** */
/*********ALTA DE MARCAS**************************************************************************************** */
function aMarca(){

  $.ajax({
    url: './php/gestion.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:$('#txt-ci').val(),
      fecha:fecha,
      hora:hora,
      op:'1'
    }
}).done(function(datos){
    console.log(datos);
    
}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
          
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
}
/*********CONSULTA DE MARCAS**************************************************************************** */
function cMarca(ci){
  $.ajax({
    url: '../php/gestion.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:ci,
      op:'2'
    }
}).done(function(datos){
  var js=JSON.parse(datos);
  var i=0;
  console.log(js);
  for(var i=0; i<js.length; i++){
    tbody_cMarcas.innerHTML="";
    tbody_cMarcas.innerHTML+=`
    <tr>
      <td>${js[i].entrada}</td>
      <td>${js[i].salida}</td>
      <td>${js[i].fecha}</td>
   </tr>
    `;
  }
    
}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
          
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
}
//CARGA DATOS DEL CLIENTE EN GESTION DE PAGOS
function cDatos(ci){
  $.ajax({
    type: "POST",
    url: "../php/usuarios.php",
    datatype: 'JSON',
    data:
    {
        ci:ci,
        op:'2'
    }
}).done(function(datos){
  var js=JSON.parse(datos);
  $('#c-nom').val(js[0].nom);
  $('#c-ape').val(js[0].ape);
  $('#c-tel').val(js[0].tel);
  $('#c-email').val(js[0].email);
}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
    
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
}
$('#btn_cCliente').click(function (e) { 
  e.preventDefault();
  cDatos($('#txt-ci-cMarca').val());
  cMarca($('#txt-ci-cMarca').val());
  cPago($('#txt-ci-cMarca').val());
});
/*********GESTION DE PAGOS******************************************************************************************** */
/*********ALTA DE PAGOS**************************************************************************************** */
/*********REGISTRO DE PAGO COMPLETO**************************************************************************************** */
$('#btn_rPagoCompleto').click(function (e) { 
  e.preventDefault();
  //REGISTRO DEL PAGO
  $.ajax({
    url: '../php/pagos.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:$('#txt-ci-cMarca').val(),
      tipo_pago:1,
      op:'1'
    }
}).done(function(datos){
    console.log(datos);
    h3_div_mensaje_habilitado.innerText='HABILITADO';
    div_mensaje_habilitado.classList.replace("alert-danger","alert-success");
    return Avisos('Se registro el Pago');
}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
          
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
//REGISTRO DEL PAGO COMO VENTA-------------------------------------------------------------->
$.ajax({
  url: '../php/productos.php',
  type: 'POST',
  dataType: 'text',
  data: {
      op: '4',
      fecha_n:fecha,
      nombre:`Pago completo de ${$('#txt-ci-cMarca').val()}`,
      categoria:'Cuotas',
      precioVenta:'1500',
      cantidad:1
  }
}).done(function (datos) {
  console.log(datos);
}).fail(function (jqXHR, textStatus, errorThrown) {

  if (jqXHR.status === 0) {

      alert('Not connect: Verify Network.');

  } else if (jqXHR.status == 404) {

      alert('Requested page not found [404]');

  } else if (jqXHR.status == 500) {

      alert('Internal Server Error [500].');

  } else if (textStatus === 'parsererror') {

      alert('Requested JSON parse failed.');

  } else if (textStatus === 'timeout') {

      alert('Time out error.');

  } else if (textStatus === 'abort') {

      alert('Ajax request aborted.');

  } else {

      alert('Uncaught Error: ' + jqXHR.responseText);

  }

});

});
/*********REGISTRO DE MEDIO PAGO**************************************************************************************** */
$('#btn_rMedioPago').click(function (e) { 
  e.preventDefault();
  $.ajax({
    url: '../php/pagos.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:$('#txt-ci-cMarca').val(),
      tipo_pago:2,
      op:'1'
    }
}).done(function(datos){
    console.log(datos);
    h3_div_mensaje_habilitado.innerText='HABILITADO';
    div_mensaje_habilitado.classList.replace("alert-danger","alert-success");

}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
          
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
});
/*********CONSULTA DE PAGO**************************************************************************************** */
function cPago(ci) {
  $.ajax({
    url: '../php/pagos.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:ci,
      op:'2'
    }
}).done(function(datos){
    if (datos==='Vacio')return;
    let js=JSON.parse(datos);
    let fechaultimopago=js[js.length-1].fecha;
    tbody_cPagos.innerHTML='';
    for(var i=0; i<js.length; i++){
      tbody_cPagos.innerHTML+=`
    <tr>
      <td>${js[i].tipo_pago}</td>
      <td>${js[i].fecha}</td>
   </tr>
    `
    }
    
    if(js[js.length-1].tipo_pago=='medio'){
      console.log('entro');
      console.log(cFechas(fecha,fechaultimopago));
      if(cFechas(fecha,fechaultimopago)>15){
        div_mensaje_habilitado.removeAttribute("hidden");
        h3_div_mensaje_habilitado.innerText='INHABILITADO';
        div_mensaje_habilitado.classList.replace("alert-success","alert-danger");
 
      }
      else{
        console.log('entro');
        div_mensaje_habilitado.removeAttribute("hidden");
        h3_div_mensaje_habilitado.innerText='HABILITADO';
        div_mensaje_habilitado.classList.replace("alert-danger","alert-success");
      }
    }
    else{
      if(cFechas(fecha,fechaultimopago)>30){
        div_mensaje_habilitado.removeAttribute("hidden");
        h3_div_mensaje_habilitado.innerText='INHABILITADO';
        div_mensaje_habilitado.classList.replace("alert-success","alert-danger");
    
      }
      else{
        div_mensaje_habilitado.removeAttribute("hidden");
        h3_div_mensaje_habilitado.innerText='HABILITADO';
        div_mensaje_habilitado.classList.replace("alert-danger","alert-success");
      }
      
    }
    resultado=js;
  

}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
          
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });

}
//PRODUCTO
function bajaProducto(producto){
  $.ajax({
      url: '../php/productos.php',
      type: 'POST',
      dataType: 'text',
      data: {
          op: '6',
          producto:producto,
      }
  }).done(function (datos) {
      console.log(datos);
      location.reload();
  }).fail(function (jqXHR, textStatus, errorThrown) {

      if (jqXHR.status === 0) {

          alert('Not connect: Verify Network.');

      } else if (jqXHR.status == 404) {

          alert('Requested page not found [404]');

      } else if (jqXHR.status == 500) {

          alert('Internal Server Error [500].');

      } else if (textStatus === 'parsererror') {

          alert('Requested JSON parse failed.');

      } else if (textStatus === 'timeout') {

          alert('Time out error.');

      } else if (textStatus === 'abort') {

          alert('Ajax request aborted.');

      } else {

          alert('Uncaught Error: ' + jqXHR.responseText);

      }

  });
}

function cDiasdePago(ci){
  $.ajax({
    url: './php/pagos.php',
    type:'POST',
    dataType: 'text',
    data:{
      ci:ci,
      op:'2'
    }
}).done(function(datos){
  let js=JSON.parse(datos);
  localStorage.setItem("RcDiasdePago",(js[js.length-1].fecha));
}).fail( function( jqXHR, textStatus, errorThrown ) {

        if (jqXHR.status === 0) {
    
        alert('Not connect: Verify Network.');
    
        } else if (jqXHR.status == 404) {
          
        alert('Requested page not found [404]');
    
        } else if (jqXHR.status == 500) {
    
        alert('Internal Server Error [500].');
    
        } else if (textStatus === 'parsererror') {
    
        alert('Requested JSON parse failed.');
    
        } else if (textStatus === 'timeout') {
    
        alert('Time out error.');
    
        } else if (textStatus === 'abort') {
    
        alert('Ajax request aborted.');
    
        } else {
    
        alert('Uncaught Error: ' + jqXHR.responseText);
    
        }
    
    });
}

function Avisos(mensaje){
  $('#ModalDeAvisos').modal('show');
  $('#TituloModalDeAvisos').text(mensaje);
}