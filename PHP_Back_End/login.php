<?php
    require_once "connect.php";
    $json = json_decode(file_get_contents('php://input'), true);
    $email = $json['email'];
    $password = $json['password'];
    if ($email != ""){
        $isPassword = mysqli_fetch_assoc(mysqli_query($conn, "SELECT password FROM user WHERE email = '$email' or username = '$email'"));
        if($isPassword["password"] == ""){
            echo json_encode('Email Incorrect');
        } else {
            if($isPassword["password"] == $password){
                $sql = "SELECT iduser FROM user WHERE email = '$email'";
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                $id = $row['iduser'];
                $output =  array('iduser'=> $id ,'onLogin'=>'true');
                echo json_encode($output);
            }else{ 
                echo json_encode('Password Incorrect');
            }
        }
    }else{
        echo json_encode('Please Enter');
    }
