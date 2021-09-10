<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);
    
    $id = $json["iduser"];
    $gender = $json["gender"];
    $birthday = $json["birthday"];
    $weight = $json["weight"];
    $height = $json["height"];
    $target = $json["target"];
    $experience = $json["experience"];

    
    
        $query1 = "UPDATE user SET gender='$gender',birthday='$birthday',weight='$weight',height='$height',target='$target',experience='$experience' WHERE iduser='$id'";
        $query_output = mysqli_query($conn, $query1);
        $message = "ok";
        echo json_encode($message);

    

?>