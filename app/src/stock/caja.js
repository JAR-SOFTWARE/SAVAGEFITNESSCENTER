import producto from "./producto.js";
import Stock from "./stock.js";
var tbody_producto=document.getElementById('tbody-producto');
var instanceStock = new Stock();

instanceStock.consultaProductos();
const listaDeProductos = instanceStock.obtenerListaProductos();

$( document ).ready(function() {
    setTimeout(function () {
    rellenarProductos();
    },1000);
 });

/* <-- Funcion de rellenar selec de productos en modal --> */
function rellenarProductos() {
    const selectProductos = document.getElementById("select_nuevaVenta");
    const selectProductosCompra = document.getElementById('select_nuevaCompra')
    for (let index = 0; index < listaDeProductos.length; index++) {
        var nomProd = listaDeProductos[index].nombre;
        selectProductos.innerHTML = selectProductos.innerHTML +'<option>'+nomProd+'</option>'; 
        selectProductosCompra.innerHTML = selectProductosCompra.innerHTML +'<option>'+nomProd+'</option>';
    } 
}

/* <-- Funcion de con la cual obtengo el producto seleccionado --> */
document.getElementById('btnreg-venta').onclick = function(){buscarProducto($('#select_nuevaVenta').val())}
document.getElementById('btnreg-compra').onclick = function(){buscarProductoCompra($('#select_nuevaVenta').val())}

function buscarProducto(nombreSeleccionado) {
    for (let index = 0; index < listaDeProductos.length; index++) {
        if (listaDeProductos[index].nombre == nombreSeleccionado) {
            return procesarVenta(listaDeProductos[index],$('#cantidad-producto').val()); 
        }
    }
    console.log('El producto no se encuentra en Stock');
}


function buscarProductoCompra(nombreSeleccionado) {
    for (let index = 0; index < listaDeProductos.length; index++) {
        if (listaDeProductos[index].nombre == nombreSeleccionado) {
            return procesarCompra(listaDeProductos[index],$('#cantidad-producto-compra').val()); 
        }
    }
    console.log('El producto no se encuentra en Stock');
}

/* <-- Funcion en la cual se resta la cantidad de productos vendidos si es posible. --> */
function procesarVenta(productoAprocesar,cantidad) {
    if (productoAprocesar.cantidad > 0) {      
        if (productoAprocesar.cantidad - cantidad >0) {
            productoAprocesar.cantidad = productoAprocesar.cantidad - cantidad; 
            altaVenta(productoAprocesar,cantidad);
        }else{
            console.log('No se encuentra la suficiente cantidad del producto')
        }
    }else{
        console.log('No hay stock del producto');
    }
}

function procesarCompra(productoAprocesar,cantidad) {
    if (productoAprocesar.cantidad > 0) {      
        if (productoAprocesar.cantidad - cantidad >0) {
            productoAprocesar.cantidad = productoAprocesar.cantidad - cantidad; 
            altaCompra(productoAprocesar,cantidad);
        }else{
            console.log('No se encuentra la suficiente cantidad del producto')
        }
    }else{
        console.log('No hay stock del producto');
    }
}

function altaVenta(productoAprocesar,cantidad) {
     //Este fragmento de codigo realiza la venta del producto. 
     var fechaDehoy = new Date();
     var fecha = fechaDehoy.getDate() + '-0' + ( fechaDehoy.getMonth() + 1 ) + '-' + fechaDehoy.getFullYear();
     var div = document.getElementById('div_footer_ventas');
     if (cantidad <= 0) {
         div.innerHTML = '<div class="alert alert-danger" role="alert">No se puede realizar la venta con cantidad menor o igual a 0 </div>';
     }else{
        productoAprocesar.precioVenta = productoAprocesar.precioVenta * cantidad;
        productoAprocesar.ventaDeProducto(fecha,'Productos',productoAprocesar.nombre,productoAprocesar.precioVenta,cantidad);
        cVentas( fechaDehoy.getFullYear()+ '-0' + ( fechaDehoy.getMonth() + 1 ) + '-' + fechaDehoy.getDate());
        setTimeout(function () {
            div.innerHTML = '<div class="alert alert-success" role="alert">Se ha procesado la venta correctamente</div>';
        },1000);
     }
}

function altaCompra(productoAprocesar,cantidad) {
    //Este fragmento de codigo realiza la venta del producto. 
    var fechaDehoy = new Date();
    var fecha = fechaDehoy.getDate() + '-0' + ( fechaDehoy.getMonth() + 1 ) + '-' + fechaDehoy.getFullYear();
    var div = document.getElementById('div_footer_compras');
    if (cantidad <= 0) {
        div.innerHTML = '<div class="alert alert-danger" role="alert">No se puede realizar la compra con cantidad menor o igual a 0 </div>';
    }else{
       productoAprocesar.precioVenta = productoAprocesar.precioVenta * cantidad;
       productoAprocesar.ventaDeProducto(fecha,'Compra',productoAprocesar.nombre,productoAprocesar.precioVenta,cantidad);
       cVentas( fechaDehoy.getFullYear()+ '-0' + ( fechaDehoy.getMonth() + 1 ) + '-' + fechaDehoy.getDate());
       setTimeout(function () {
           div.innerHTML = '<div class="alert alert-success" role="alert">Se ha procesado la compra correctamente</div>';
       },1000);
    }
}

/*SECCION LISTADO POR FECHA */
$(function(){
    $("#Fecha_cVenta").change(function(){
        var valor = $(this).val();
        if(valor!=""){
            //Aca va el codigo
            cVentas(valor);
        }else{
            $("#prueba").html("Campo Vacío");
        }
    })
})

function cVentas(fecha) {
    var fecha1split=fecha.split('-');
    var fecha1dia=fecha1split[0];
    var fecha1mes=fecha1split[1];
    var fecha1año=fecha1split[2];
    fecha=(fecha1año+"-"+fecha1mes+"-"+fecha1dia);
    $.ajax({
        url: '../php/productos.php',
        type:'POST',
        dataType: 'text',
        data:{
          fecha:fecha,
          op:'5'
        }
    }).done(function(datos){
        var js=JSON.parse(datos);
        var i=0;
        tbody_producto.innerHTML="";
        var total = 0;
        var totalCompra = 0;
        for(var i=0; i<js.length; i++){
            if (js[i].Tipo =='Compra') {
                tbody_producto.innerHTML+=`
                <tr>
                <td>${js[i].Tipo}</td>
                <td>${js[i].Descripcion}</td>
                <td>${js[i].Efectivo}</td>
                </tr>
                `;
                totalCompra += parseInt(js[i].Efectivo);
                document.getElementById("comprasTotales").innerHTML = '$'+totalCompra+'.00'
            }else{
                tbody_producto.innerHTML+=`
                <tr>
                <td>${js[i].Tipo}</td>
                <td>${js[i].Descripcion}</td>
                <td>${js[i].Efectivo}</td>
                </tr>
                `;
                total += parseInt(js[i].Efectivo);
                document.getElementById("ventasTotales").innerHTML = '$'+total+'.00';
            }
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

$( document ).ready(function() {
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById("Fecha_cVenta").value = ano+"-"+mes+"-"+dia;
    cVentas(ano+"-"+mes+"-"+dia);
 });

