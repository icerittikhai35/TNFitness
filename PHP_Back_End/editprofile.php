<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);
    
    $id = $json["iduser"];
    $email=$json["email"];
    $gender = $json["gender"];
    $weight = $json["weight"];
    $height = $json["height"];
    $target = $json["target"];
    $experience = $json["experience"];

    
    
        $query1 = "UPDATE user SET email='$email',gender='$gender',weight='$weight',height='$height',target='$target',experience='$experience' WHERE iduser='$id'";
        $query_output = mysqli_query($conn, $query1);
        $message = "ok";
        echo json_encode($message);

    

?>