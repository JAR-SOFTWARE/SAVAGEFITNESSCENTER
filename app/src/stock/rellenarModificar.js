function modificarProducto(nombre,categoria,precioCompra,precioVenta,cantidad){
    /* Se agregan nombre del producto seleccionado al modal*/
    $('#formNombreM').val(nombre)
    $('#formCategoriaM').val(categoria);
    $('#formPrecioCompraM').val(precioCompra);
    $('#formPrecioVentaM').val(precioVenta);
    $('#formCantidadM').val(cantidad);
}
