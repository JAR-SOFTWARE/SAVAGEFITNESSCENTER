import producto from './producto.js';
import Stock from './stock.js';
import { listaProductos } from './stock.js';
const instanceStock = new Stock();
instanceStock.consultaProductos();

const btnCrearProducto = document.getElementById('btnregProducto').onclick = function(){registroProducto($('#formNombre').val(),$('#formCategoria').val(),$('#formPrecioCompra').val(),$('#formPrecioVenta').val(),$('#formCantidad').val())};
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
}

window.onload = (event) =>{
    mostrarTodosLosProductos();
};

function mostrarTodosLosProductos(){
    const tablaProductos = document.getElementById("tbody-productos");
    var listaDeProductos = listaProductos;
    tablaProductos.innerHTML = "" ;
    console.log(listaDeProductos);
    for (let index = 0; index < listaDeProductos.length; index++) {
       
    }
}

