<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);
    
    $img = $json["img"];
    $id = $json["id"];
    
        $query1 = "INSERT INTO album_exer (album_exer_img, idnew_feed_exer) VALUES ('$img','$id');";
        $query_output = mysqli_query($conn, $query1);

        if($query_output){
            $message = "ok";
        } else {
            $message = "fail";
        }

        echo json_encode($message);

?>