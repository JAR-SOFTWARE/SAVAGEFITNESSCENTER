//Constructor
export default class producto{
    constructor(nombre,categoria,precioCompra,precioVenta,cantidad){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
        this.aProductoBD(this.nombre,this.categoria,this.precioCompra,this.precioVenta,this.cantidad);
    }
    set setNombre(newNombre){this.nombre=newNombre;}   
    set setCategoria(newCategoria){this.categoria=newCategoria;}
    set setPrecioCompra(newPrecioCompra){this.precioCompra=newPrecioCompra;} 
    set setPrecioVenta(newPrecioVenta){this.precioVenta=newPrecioVenta;}
    set setCantidad(newCantidad){this.cantidad=newCantidad;}  
    
    get getNombre(){return this.nombre;}

    aProductoBD(nombre, categoria, precioCompra, precioVenta, cantidad) {
        $.ajax({
            url: '../php/productos.php',
            type: 'POST',
            dataType: 'text',
            data: {
                op: '1',
                nombre:nombre,
                categoria:categoria,
                precioCompra:precioCompra,
                precioVenta:precioVenta,
                cantidad:cantidad
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

    bProductoBD(nombre){
    }
    
    mProductoBD(nombre, categoria, precioCompra, precioVenta, cantidad){
        $.ajax({
            url: '../php/productos.php',
            type: 'POST',
            dataType: 'text',
            data: {
                op: '3',
                nombre:nombre,
                categoria:categoria,
                precioCompra:precioCompra,
                precioVenta:precioVenta,
                cantidad:cantidad
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
}
