<?php
include("conexion.php");
$op=$_POST['op'];

switch($op){
case '1'://CONSULTA DE PAGO
    $ci=$_POST['ci'];
    $consulta="SELECT * FROM vPagos WHERE ci=$ci";
    $select= mysqli_query($conexion,$consulta);
    while($datos=mysqli_fetch_assoc($select)){
    $arr[]=$datos;
    }
    echo json_encode($arr);
    break;
case '2':
    
    
}