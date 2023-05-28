<?php
include("conexion.php");
$op=$_POST['op'];

switch($op){
case '1'://ALTA DE MARCAS

    $ci=$_POST['ci'];
    $fecha=$_POST['fecha'];
    $hora=$_POST['hora'];
    $consulta="SELECT aMarcas($ci,'$hora','$fecha')";
    $resultado= mysqli_query($conexion,$consulta);
    if($resultado){
        $row=$resultado->fetch_array();
        echo json_encode($row[0]);        
    }

    break;
case '2'://CONSULTA DE MARCAS
    $ci=$_POST['ci'];
    $consulta="SELECT * from vMarcas where ci=$ci";
    $select= mysqli_query($conexion,$consulta);
    while($datos=mysqli_fetch_assoc($select)){
    $arr[]=$datos;
    }
    if (empty($arr)){
        echo 'Vacio';
        break;
    }
    echo json_encode($arr);
    break;
    
}