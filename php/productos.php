<?php
include("conexion.php");
$op=$_POST['op'];

switch($op){
case '1'://ALTA DE PRODUCTO
    $nombre=$_POST['nombre'];
    $categoria=$_POST['categoria'];
    $precioCompra=$_POST['precioCompra'];
    $precioVenta=$_POST['precioVenta'];
    $cantidad=$_POST['cantidad'];
    
    $consulta="SELECT aProducto('$nombre','$categoria',$precioCompra,$precioVenta,$cantidad)";
    $resultado= mysqli_query($conexion,$consulta);
    if($resultado){
        $row=$resultado->fetch_array();
        echo json_encode($row[0]);        
    }

    break;
case '2'://CONSULTA DE PRODUCTOS
    $consulta="SELECT * FROM vProductos";
    $select= mysqli_query($conexion,$consulta);
    while($datos=mysqli_fetch_assoc($select)){
        $arr[]=$datos;
    }
    echo json_encode($arr);
    break;

case '3'://MODIFICACION DE PRODUCTO
    $nombre=$_POST['nombre'];
    $categoria=$_POST['categoria'];
    $precioCompra=$_POST['precioCompra'];
    $precioVenta=$_POST['precioVenta'];
    $cantidad=$_POST['cantidad'];
    
    $consulta="SELECT mProducto('$nombre','$categoria',$precioCompra,$precioVenta,$cantidad)";
    $resultado= mysqli_query($conexion,$consulta);
    if($resultado){
        $row=$resultado->fetch_array();
        echo json_encode($row[0]);        
    }
}