<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);

    $username = $json["username"];
    $password = $json["password"];
    $email = $json["email"];


    $count = mysqli_num_rows(mysqli_query($conn,"SELECT * FROM new_table WHERE email = '$email'"));
    if($count == 1){
        $arr = array("result"=>"Email already has");
        echo json_encode($arr);
    } elseif ($count == 0) {
        $query1 = "INSERT INTO new_table  (idnew_table, username,password, email) VALUES (NULL, '$username', '$password', '$email');";
        $query_output = mysqli_query($conn, $query1);
        $arr = array('result'=>'เสร็จสิ้น');
        echo json_encode($arr);
    } else {
        $arr = array('result' => 'fail');
        echo json_encode($arr);
    } 
?>
