import producto from './producto.js';
export{obtenerListaProductos,agregarProductos};

const listaProductos = [];

//getter
function obtenerListaProductos(){
    return this.listaProductos;
}

//Metodos
function agregarProductos(producto){
    this.listaProductos.push(producto);
}