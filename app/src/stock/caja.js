import producto from "./producto";
import Stock from "./stock";

var instanceStock = new Stock();

instanceStock.consultaProductos();
const listaDeProductos = instanceStock.obtenerListaProductos();
/* <-- Funcion de rellenar selec de productos en modal -->*/
function rellenarProductos() {
    const selectProductos = document.getElementById("select_nuevaVenta");
    for (let index = 0; index < listaDeProductos.length; index++) {
        const nomProd = listaDeProductos[index].nombre;
        var snproducto;  
    } 
}