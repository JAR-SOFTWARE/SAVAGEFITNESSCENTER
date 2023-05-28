<?php
include("conexion.php");
$op=$_POST['op'];

switch($op){
case '1'://FUNCION DE LOGIN 
    $ci=$_POST['ci'];
    $consulta="SELECT userCheck('$ci')";
    $resultado= mysqli_query($conexion,$consulta);
    if($resultado){
        $row=$resultado->fetch_array();
        echo json_encode($row[0]);        
    }
    break;   
case '2'://CONSULTA DE DATOS POR CEDULA
    $ci=$_POST['ci'];   
    $consulta="SELECT * from vUsuariosxPago where ci='$ci'";
    $resultado= mysqli_query($conexion,$consulta);
    if(mysqli_num_rows($resultado) != 0){
        while($datos=mysqli_fetch_assoc($resultado)){
            $arr[]=$datos;
        }
        echo json_encode($arr);
     }else{
        echo 'Vacio';
     }    
    break;    
case '3'://CONSULTA DE USUARIOS
  
$consulta="SELECT * FROM usuarios";
$select= mysqli_query($conexion,$consulta);
while($datos=mysqli_fetch_assoc($select)){
    $arr[]=$datos;
}
echo json_encode($arr);
break;
case '4'://ALTA DE USUARIOS
    $ci=$_POST['ci'];
    $nom=$_POST['nom'];
    $ape=$_POST['ape'];
    $tel=$_POST['tel'];
    $email=$_POST['email'];
    $fnac=$_POST['fnac'];
    $tipo=$_POST['tipo'];
    $consulta="SELECT aUsuario($ci,'$nom','$ape',$tel,'$email','$fnac','$tipo')";
    echo $consulta;
    $resultado= mysqli_query($conexion,$consulta);
                if($resultado){
                        $row=$resultado->fetch_array();
                        echo json_encode($row[0]);        
                }
    break;
case '5'://MODIFICACION DE USUARIOS
        $ci=$_POST['ci'];
        $nom=$_POST['nom'];
        $ape=$_POST['ape'];
        $tel=$_POST['tel'];
        $email=$_POST['email'];
        $consulta="SELECT mUsuario($ci,'$nom','$ape',$tel,'$email')";
        echo $consulta;
        $resultado= mysqli_query($conexion,$consulta);
                    if($resultado){
                            $row=$resultado->fetch_array();
                            echo json_encode($row[0]);        
                    }
        break;   
case '6'://BAJA DE USUARIOS
            $ci=$_POST['ci'];
            $consulta="SELECT bUsuario($ci)";
            echo $consulta;
            $resultado= mysqli_query($conexion,$consulta);
                        if($resultado){
                                $row=$resultado->fetch_array();
                                echo json_encode($row[0]);        
                        }
            break;           
}