import producto from './producto.js';
import Stock from './stock.js';

const btnCrearProducto = document.getElementById('btnregProducto').onclick = function(){registroProducto($('#formNombre').val(),$('#formCategoria').val(),$('#formPrecioCompra').val(),$('#formPrecioVenta').val(),$('#formCantidad').val())};
const footerModal = document.getElementById("MdalFooter");

function registroProducto(nombre,categoria,precioCompra,precioVenta,cantidad){
    const nuevoProducto = new producto(nombre,categoria,precioCompra,precioVenta,cantidad);
    footerModal.innerHTML = '<div class="alert alert-success" role="alert">Se ha registrado un nuevo producto</div>';
    setTimeout(function () {
        footerModal.innerHTML = ' ';
        $('#formNombre').val('');
        $('#formCategoria').val('');
        $('#formPrecioCompra').val('');
        $('#formPrecioVenta').val('');
        $('#formCantidad').val('');},2000);
    Stock.agregarProductos(nuevoProducto);
}

function mostrarTodosLosProductos(){
    Stock.consultaProductos();
}