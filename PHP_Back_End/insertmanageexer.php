<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);

    $day = $json["day"];
    $iduser = $json["iduser"];
    $idexer = $json["idexer"];
    $onerm = $json["onerm"];

    if($day == ""){
        $day = date("Y-m-d");
        $query = "INSERT INTO manageexercise (idexercise, iduser, onerm, day) VALUES ('$idexer', '$iduser', '$onerm', '$day');";
        $query_output = mysqli_query($conn, $query);
        if($query_output){
            $message = "Ok";
        } else{
            $message = "Fail";
        }
        echo json_encode($message);
    } else{
        $query = "INSERT INTO manageexercise (idexercise, iduser, onerm, day) VALUES ('$idexer', '$iduser', '$onerm', '$day');";
        $query_output = mysqli_query($conn, $query);
        if($query_output){
            $message = "Ok";
        } else{
            $message = "Fail";
        }
        echo json_encode($message);
    }
 
   
?>