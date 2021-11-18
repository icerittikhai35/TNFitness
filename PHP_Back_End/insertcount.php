<?php
    require_once "connect.php";

    $json = json_decode(file_get_contents('php://input'), true);

    $roundone = $json["roundone"];
    $roundtwo = $json["roundtwo"];
    $roundthree = $json["roundthree"];
    $roundfour = $json["roundfour"];
    $roundfive = $json["roundfive"];
    $roundsix = $json["roundsix"];

    $iduser = $json["iduser"];
    $idexercise = $json["idexercise"];
    $round = $json["round"];

    $date = $json["date"];


    if($roundtwo == ""){
        $query = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundone', '$date');";
        $query_output = mysqli_query($conn, $query);
        if($query_output){
            $message = "insert one Ok";
        } else{
            $message = "insert one Fail";
        }
        echo json_encode($message);
    } else if($roundthree == ""){
        $query = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundone', '$date');";
        $query_output = mysqli_query($conn, $query);


        $query2 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundtwo', '$date');";
        $query_output2 = mysqli_query($conn, $query2);


        if($query_output && $query_output2){
            $message = "insert two Ok";
        } else{
            $message = "insert two Fail";
        }
        echo json_encode($message);
    }else if($roundfour == ""){
        $query = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundone', '$date');";
        $query_output = mysqli_query($conn, $query);


        $query2 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundtwo', '$date');";
        $query_output2 = mysqli_query($conn, $query2);

        $query3 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundthree', '$date');";
        $query_output3 = mysqli_query($conn, $query3);


        if($query_output && $query_output2 && $query_output3){
            $message = "insert two Ok";
        }else{
            $message = "insert four Fail";
        }
        
        echo json_encode($message);
    }else if($roundfive == ""){
        $query = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundone', '$date');";
        $query_output = mysqli_query($conn, $query);
        $query2 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundtwo', '$date');";
        $query_output2 = mysqli_query($conn, $query2);
        $query3 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundthree', '$date');";
        $query_output3 = mysqli_query($conn, $query3);
        $query4 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundfour', '$date');";
        $query_output4 = mysqli_query($conn, $query4);


        if($query_output && $query_output2 && $query_output3 && $query_output4){
            $message = "insert two Ok";
        } else{
            $message = "insert five Fail";
        }
        echo json_encode($message);
    }else if($roundsix == ""){
        $query = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundone', '$date');";
        $query_output = mysqli_query($conn, $query);
        $query2 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundtwo', '$date');";
        $query_output2 = mysqli_query($conn, $query2);
        $query3 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundthree', '$date');";
        $query_output3 = mysqli_query($conn, $query3);
        $query4 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundfour', '$date');";
        $query_output4 = mysqli_query($conn, $query4);
        $query5 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundfive', '$date');";
        $query_output5 = mysqli_query($conn, $query5);


        if($query_output && $query_output2 && $query_output3 && $query_output4 && $query_output5){
            $message = "insert two Ok";
        } else{
            $message = "insert six Fail";
        }
        echo json_encode($message);
    } else if($roundsix != ""){
        $query = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundone', '$date');";
        $query_output = mysqli_query($conn, $query);
        $query2 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundtwo', '$date');";
        $query_output2 = mysqli_query($conn, $query2);
        $query3 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundthree', '$date');";
        $query_output3 = mysqli_query($conn, $query3);
        $query4 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundfour', '$date');";
        $query_output4 = mysqli_query($conn, $query4);
        $query5 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundfive', '$date');";
        $query_output5 = mysqli_query($conn, $query5);
        $query6 = "INSERT INTO roundexercise (iduser, idexercise, round, roundvolume, date) VALUES ('$iduser', '$idexercise', '$round','$roundsix', '$date');";
        $query_output6 = mysqli_query($conn, $query6);


        if($query_output && $query_output2 && $query_output3 && $query_output4 && $query_output5 && $query_output6){
            $message = "insert two Ok";
        } else{
            $message = "insert six Fail";
        }
        echo json_encode($message);
        
    } else{
        $message = "Not yet";
    }

    echo json_encode($message);
 
   
?>