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
    $url = $json["url"]; 

    
    if ($weight == "") {
        echo json_encode('กรุณากรอกน้ำหนัก');
    }
    elseif ($height == "") {
        echo json_encode('กรุณากรอกส่วนสูง');
    } else {
        $query1 = "UPDATE user SET gender='$gender',birthday='$birthday',weight='$weight',height='$height',target='$target',experience='$experience',url='$url' WHERE iduser='$id'";
        $query_output = mysqli_query($conn, $query1);
        $message = "ok";
        echo json_encode($message);

    }
?>