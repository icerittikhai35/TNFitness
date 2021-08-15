<?php
    require_once "connect.php";
    $json = json_decode(file_get_contents('php://input'), true);
    $email = $json['email'];
    $password = $json['password'];
    if ($email != ""){
        $isPassword = mysqli_fetch_assoc(mysqli_query($conn, "SELECT password FROM new_table WHERE email = '$email' or username = '$email'"));
        if($isPassword["password"] == ""){
            echo json_encode('Email Incorrect');
        } else {
            if($isPassword["password"] == $password){
                echo json_encode('true');
            }else{ 
                echo json_encode('Password Incorrect');
            }
        }
    }else{
        echo json_encode('Please Enter');
    }
?>
