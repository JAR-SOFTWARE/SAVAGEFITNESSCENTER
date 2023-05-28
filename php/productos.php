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
    
case '2'://CONSULTA DE USUARIOS
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
    break;

case '4'://VENTA DE PRODUCTO
    $fecha=$_POST['fecha_n'];
    $nombre=$_POST['nombre'];
    $categoria=$_POST['categoria'];
    $precioVenta=$_POST['precioVenta'];
    $cantidad=$_POST['cantidad'];
        
    $consulta="SELECT aVenta('$categoria','$nombre',$precioVenta,'$fecha',$cantidad)";
    $resultado= mysqli_query($conexion,$consulta);
    if($resultado){
        $row=$resultado->fetch_array();
        echo json_encode($row[0]);        
    }
    break;

case '5'://CONSULTA DE VENTAS 
        $fecha=$_POST['fecha'];
        $consulta="SELECT * FROM vVentasGeneral WHERE Fecha='$fecha'";
        $select= mysqli_query($conexion,$consulta);
        if($select){
            while($datos=mysqli_fetch_assoc($select)){
                $arr[]=$datos;
            }
            if (empty($arr)){
                echo 'Vacio';
                break;
            }
            echo json_encode($arr);
        }
        else{
            echo json_encode('No tiene dato');
        };
        break;

case '6'://BAJA DE PRODUCTO
            $producto=$_POST['producto'];
            $consulta="SELECT bProducto('$producto')";
            $select= mysqli_query($conexion,$consulta);
            if($resultado){
                $row=$resultado->fetch_array();
                echo json_encode($row[0]);        
            }
            
            break;

case '7'://BAJA DE PRODUCTO
                $id=$_POST['id'];
                $consulta="SELECT bVenta('$id')";
                $select= mysqli_query($conexion,$consulta);
                if($select){
                    while($datos=mysqli_fetch_assoc($select)){
                        $arr[]=$datos;
                    }
                    if (empty($arr)){
                        echo 'Vacio';
                        break;
                    }
                    echo json_encode($arr);
                }
                else{
                    echo json_encode('No tiene dato');
                };
                break;
}