<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);

    $username = $json["username"];
    $email = $json["email"];
    $password = $json["password"];


    $count = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where email = '$email'"));
    $count2 = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM user where username ='$username'"));

    if ($email == "" ){
        echo json_encode("กรุณากรอกอีเมล์");
    }elseif ($username == ""){ 
        echo json_encode("กรุณากรอกชื่อผู้ใช้งาน");
    }elseif ($password == ""){
        echo json_encode("กรุณากรอกรหัสผ่าน");
    }else{
        if($count == 1 ){
            $message = "Email already has";
            echo json_encode($message);
        } elseif ($count2 == 1){
            $message = "Username already has";
            echo json_encode($message);
        } elseif ($count == 0) {
            $query1 = "INSERT INTO user (iduser, username, email, password) VALUES (NULL, '$username', '$email', '$password');";
            $query_output = mysqli_query($conn, $query1);
            $message = "ok";
            echo json_encode($message);
        } else {
            $arr = array('result' => 'fail');
            echo json_encode($arr);
        } 
    }
