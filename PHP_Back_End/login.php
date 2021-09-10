<?php
require_once "connect.php";
$json = json_decode(file_get_contents('php://input'), true);


$username = $json['username'];
$password = $json['password'];




    if ($username != "") {
        $isPassword = mysqli_fetch_assoc(mysqli_query($conn, "SELECT password FROM user WHERE username = '$username'"));
        if ($isPassword["password"] == "") {
            echo json_encode('Username Incorrect');
        } else {
            if ($isPassword["password"] == $password) {
                $sql = "SELECT * FROM user WHERE username = '$username'";
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                $id = $row['iduser'];
                $gender = $row['gender'];
                $output =  array('iduser' => $id, 'onLogin' => 'true', 'gender' => $gender);                
                echo json_encode($output);
                
            } else {
                echo json_encode('Password Incorrect');
            }
        }
    } else {
        echo json_encode('Please Enter');
    }
?>