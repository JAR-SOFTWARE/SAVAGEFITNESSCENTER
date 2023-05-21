<?php
//sql534.main-hosting.eu
//$conexion=mysqli_connect("sql534.main-hosting.eu","u136986352_JAR","Work2021.","u136986352_gym_ezequiel");
//$conexion=mysqli_connect("sql534.main-hosting.eu","u136986352_JAR","Work2021.","u953094190_gym_ezequiel");
$conexion=mysqli_connect("localhost","root","","u953094190_gym_ezequiel");

if (!$conexion) {
    die("Connection failed: " . mysqli_connect_error());
}
