import producto from "./producto";
import Stock from "./stock";

var instanceStock = new Stock();

instanceStock.consultaProductos();
const listaDeProductos = instanceStock.obtenerListaProductos();

/* <-- Funcion de rellenar selec de productos en modal --> */
function rellenarProductos() {
    const selectProductos = document.getElementById("select_nuevaVenta");
    for (let index = 0; index < listaDeProductos.length; index++) {
        var nomProd = listaDeProductos[index].nombre;
        selectProductos.innerHTML = selectProductos.innerHTML +'<option>'+nomProd+'</option>'; 
    } 
}

/* <-- Funcion de con la cual obtengo el producto seleccionado --> */

function buscarProducto(nombreSeleccionado) {
    for (let index = 0; index < listaDeProductos.length; index++) {
        if (listaDeProductos[index].nombre == nombreSeleccionado) {
            console.log(listaDeProductos[index]);
            procesarVenta(listaDeProductos[index]); 
        }else{
            console.log('El producto no se encuentra en Stock');
        }
    }
}

/* <-- Funcion en la cual se resta la cantidad de productos vendidos si es posible. --> */
function procesarVenta(productoAprocesar,cantidad) {
    if (productoAprocesar.cantidad != 0) {      
        if (productoAprocesar.cantidad - cantidad >0) {
            productoAprocesar.cantidad = productoAprocesar.cantidad - cantidad;
            productoAprocesar.mProductoBD(productoAprocesar.nombre,productoAprocesar.categoria,productoAprocesar.precioCompra,productoAprocesar.precioVenta,productoAprocesar.cantidad);
            //Este fragmento de codigo realiza la venta del producto. 
            fechaDehoy = new Date();
            var fecha = fechaDehoy.getDate() + '-0' + ( fechaDehoy.getMonth() + 1 ) + '-' + fechaDehoy.getFullYear(); 
            productoAprocesar.ventaDeProducto(fecha,productoAprocesar.categoria,productoAprocesar.nombre,productoAprocesar.precioVenta,productoAprocesar.cantidad);

        }else{
            console.log('No se encuentra la suficiente cantidad del producto')
        }
    }else{
        console.log('No hay stock del producto');
    }
}