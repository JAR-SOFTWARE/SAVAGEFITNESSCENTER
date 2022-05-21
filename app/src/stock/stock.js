import producto from './producto.js';

export default class Stock{
    listaProductos = [];
    constructor(){
    }

    obtenerListaProductos(){
        return this.listaProductos;
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
    }   
//Metodo el cual agrega productos a la lista de productos
    agregarProductos(producto){
        this.listaProductos.push(producto);
    }

}
