import producto from './producto.js';
export const listaProductos = [];
export default class Stock{
    constructor(){  
    }

    obtenerListaProductos(){
        return listaProductos;
    }

    consultaProductos() {
        $.ajax({
            url: '../php/productos.php',
            type: 'POST',
            dataType: 'text',
            data: {
                op: '2',
            }
        }).done(function (datos) {
            var js = JSON.parse(datos);
            
            for (let index = 0; index < js.length; index++) {
                var nombreProd = js[index].Producto;
                var categoriaProd = js[index].Categoria;
                var precioCompraProd = js[index].pCompra;
                var precioVentaProd = js[index].pVenta;
                var cantidadProd = js[index].cantidad;

                var nproducto = new producto(nombreProd,categoriaProd,precioCompraProd,precioVentaProd,cantidadProd);
                listaProductos.push(nproducto);
            }
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
//Metodo el cual agrega productos a la lista de productos
    agregarProductos(producto){
        listaProductos.push(producto);
    }

}
