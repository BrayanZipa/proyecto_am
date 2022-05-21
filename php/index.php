<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conexión base de datos
$servidor = "localhost"; 
$usuario = "root"; 
$contrasenia = ""; 
$nombreBaseDatos = "angularpf";

$conexionBD = new mysqli( $servidor , $usuario , $contrasenia , $nombreBaseDatos );

if ($conexionBD->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $conexionBD->connect_errno . ") " . $conexionBD->connect_error;
}
echo $conexionBD->host_info."\n";


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if ( isset ( $_GET [ "consultar" ])){
    $sqlAngulaPF = mysqli_query ( $conexionBD , "SELECT * FROM angularpf WHERE idEstudiante=" . $_GET [ "consultar" ]);
    if ( mysqli_num_rows ( $sqlAngulaPF ) > 0 ){
        $empleados = mysqli_fetch_all ( $sqlAngulaPF , MYSQLI_ASSOC );
        echo  json_encode ( $AngularPF );
        exit();
    }
    else {   echo  json_encode ([ "success" => 0 ]); }
}

//Borrar pero se le debe enviar una clave (para borrar)
if ( isset ( $_GET [ "borrar" ])){
    $sqlAngulaPF = mysqli_query ( $conexionBD , "DELETE FROM angularpf WHERE idEstudiante=" . $_GET [ "borrar" ]);
    if ( $sqlAngulaPF ){
        echo  json_encode ([ "success" => 1 ]);
        exit();
    }
    else {   echo  json_encode ([ "success" => 0 ]); }
}

//Insertar un nuevo registro en la tabla de estudiantes
if ( isset ( $_GET [ "insertar" ])){
    $datos = json_decode ( file_get_contents ( "php://input" ));

    $nombre = $datos -> nombre;
    $apellidos  = $datos -> apellidos ; 
    $sexo = $datos -> sexo ; 
    $tipoDocumento = $datos -> tipoDocumento ; 
    $edad = $datos -> edad ; 
    $numeroDocumento = $datos -> numeroDocumento ; 
    $direccion = $datos -> direccion ; 
    $telefono = $datos -> telefono ; 
    $correo = $datos -> correo ; 
    $carrera = $datos -> carrera ; 
    $jornada = $datos -> jornada ; 

    if (( $nombre != "" )&&( $apellidos != "" )&&( $sexo != "" )&&( $tipoDocumento != "" )&&( $edad != "" )&&( $numeroDocumento != "" )&&
        ( $direccion != "" )&&( $telefono != "" )&&( $correo != "" )&&( $carrera != "" )&&( $jornada != "" )){
            
        $sqlAngulaPF = mysqli_query ( $conexionBD , "INSERT INTO estudiantes(nombre,apellidos,sexo,tipoDocumento,edad,numeroDocumento,direccion,telefono,
        correo,carrera,jornada) VALUES('".$nombre."','".$apellidos."','".$sexo."','".$tipoDocumento."','".$edad."','".$numeroDocumento."','".$direccion."','".$telefono."','".$correo."','".$carrera."','".$jornada."')");
        echo  json_encode ([ "success" => 1 ]);
    }
    exit();
}

// Actualiza los datos de un registro mediante una clave
if ( isset ( $_GET [ "actualizar" ])){
    $datos = json_decode ( file_get_contents ( "php://input" ));

    $idEstudiante = ( isset ( $datos -> id )) ? $datos -> id : $_GET [ "actualizar" ];
    $nombre = $datos -> nombre ;
    $apellidos  =$datos -> apellidos ; 
    $sexo = $datos -> sexo ; 
    $tipoDocumento = $datos -> tipoDocumento ; 
    $edad = $datos -> edad ; 
    $numeroDocumento = $datos -> numeroDocumento ; 
    $direccion = $datos -> direccion ; 
    $telefono = $datos -> telefono ; 
    $correo = $datos -> correo ; 
    $carrera = $datos -> carrera ; 
    $jornada = $datos -> jornada ; 
    
    $sqlAngulaPF = mysqli_query ( $conexionBD , "UPDATE AngularPF SET nombre='$nombre',apellidos='$apellidos',sexo='$sexo',tipoDocumento='$tipoDocumento',
    edad='$edad',numeroDocumento='$numeroDocumento',direccion='$direccion',telefono='$telefono',correo='$correo',carrera='$carrera',jornada='$jornada' WHERE idEstudiante ='$idEstudiante'" );
    echo  json_encode ([ "success" => 1 ]);
    exit();
}

// Consulta todos los registros de la tabla de estudiantes
$sqlAngulaPF = mysqli_query ( $conexionBD , "SELECT * FROM estudiantes" );
if ( mysqli_num_rows ( $sqlAngulaPF ) > 0 ){
    $AngularPF = mysqli_fetch_all ( $sqlAngulaPF , MYSQLI_ASSOC );
    echo  json_encode ( $AngularPF );
}
else { echo  json_encode ([[ "success" => 0 ]]); }

?>