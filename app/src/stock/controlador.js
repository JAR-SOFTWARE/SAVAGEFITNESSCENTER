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
        '<td colspan="2"><button onclick="modificarProducto('+'\''+listaDeProductos[index].nombre+''+'\','+'\''+listaDeProductos[index].categoria+''+'\','+'\''+listaDeProductos[index].precioCompra+''+'\','+'\''+listaDeProductos[index].precioVenta+''+'\','+'\''+listaDeProductos[index].cantidad+''+'\');" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-mProducto">Modificar</button><button onclick="bajaProducto('+'\''+listaDeProductos[index].nombre+''+'\');" class="btn btn-danger">Eliminar</button></td>'
        '</tr>';
    }
}


document.getElementById('btnModProducto').onclick = function(){modificacionEnBDdeProducto($('#formNombreM').val(),$('#formCategoriaM').val(),$('#formPrecioCompraM').val(),$('#formPrecioVentaM').val(),$('#formCantidadM').val())};

function modificacionEnBDdeProducto(nombre,categoria,precioCompra,precioVenta,cantidad) {
     /* Debo buscar el producto para poder modificarlo en la BD */
     const footerModalMod = document.getElementById("ModalModFooter");
     var productoAmod = instanceStock.buscarProducto(nombre);
     productoAmod.mProductoBD(nombre,categoria,precioCompra,precioVenta,cantidad);
     footerModalMod.innerHTML = '<div class="alert alert-success" role="alert">Se ha modificado correctamente el producto</div>';
    setTimeout(function () {
        footerModalMod.innerHTML = ' ';
        location.reload();
    },2000);
}

$( document ).ready(function() {
    setTimeout(function () {
    mostrarTodosLosProductos();
    },1000);
 });
