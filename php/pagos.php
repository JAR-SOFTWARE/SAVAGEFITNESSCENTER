<?php
include("conexion.php");
$op=$_POST['op'];

switch($op){
case '1'://ALTA DE PAGO
    $ci=$_POST['ci'];
    $tipo_pago=$_POST['tipo_pago'];
    $consulta="SELECT aPago($ci,$tipo_pago)";
    $resultado= mysqli_query($conexion,$consulta);
    if($resultado){
        $row=$resultado->fetch_array();
        echo json_encode($row[0]);        
    }
    break;
case '2'://CONSULTA DE PAGO
    $ci=$_POST['ci'];
    $consulta="SELECT * FROM vPagos WHERE ci=$ci";
    $select= mysqli_query($conexion,$consulta);
    while($datos=mysqli_fetch_assoc($select)){
    $arr[]=$datos;
    }
    echo json_encode($arr);
    break;
    
}