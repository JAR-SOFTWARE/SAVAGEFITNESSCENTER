import producto from './producto.js';
import Stock from './stock.js';

const instanceStock = new Stock();
instanceStock.consultaProductos();

document.getElementById('btnregProducto').onclick = function(){registroProducto($('#formNombre').val(),$('#formCategoria').val(),$('#formPrecioCompra').val(),$('#formPrecioVenta').val(),$('#formCantidad').val())};
const footerModal = document.getElementById("MdalFooter");

function registroProducto(nombre,categoria,precioCompra,precioVenta,cantidad){
    const nuevoProducto = new producto(nombre,categoria,precioCompra,precioVenta,cantidad);
    nuevoProducto.aProductoBD(nombre,categoria,precioCompra,precioVenta,cantidad);
    footerModal.innerHTML = '<div class="alert alert-success" role="alert">Se ha registrado un nuevo producto</div>';
    setTimeout(function () {
        footerModal.innerHTML = ' ';
        $('#formNombre').val('');
        $('#formCategoria').val('');
        $('#formPrecioCompra').val('');
        $('#formPrecioVenta').val('');
        $('#formCantidad').val('');
    },2000);
    instanceStock.agregarProductos(nuevoProducto);
    mostrarTodosLosProductos();
}

function mostrarTodosLosProductos(){
    const tablaProductos = document.getElementById("tbody-productos");
    var listaDeProductos = instanceStock.obtenerListaProductos();
    tablaProductos.innerHTML = "" ;
    console.log(listaDeProductos);
    console.log(listaDeProductos[0].nombre);
    for (let index = 0; index < listaDeProductos.length; index++) {
        var ganancia = listaDeProductos[index].precioVenta - listaDeProductos[index].precioCompra;
        tablaProductos.innerHTML=tablaProductos.innerHTML+
        '<tr class="table-active">'+
        '<td>'+listaDeProductos[index].nombre+'</td>'+
        '<td>'+listaDeProductos[index].categoria+'</td>'+
        '<td>'+listaDeProductos[index].precioCompra+'</td>'+
        '<td>'+listaDeProductos[index].precioVenta +'</td>'+
        '<td>'+ganancia+'</td>'+
        '<td>'+listaDeProductos[index].cantidad+'</td>'+
        '<td colspan="2"><button class="btn btn-secondary">Modificar</button> <button" class="btn btn-danger">Eliminar</button></td>'
        '</tr>';
    }
}

$( document ).ready(function() {
    setTimeout(function () {
    mostrarTodosLosProductos();
    },1000);
 });
