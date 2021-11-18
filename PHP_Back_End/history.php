<?php
include 'connect.php';

$iduser = $_GET["id"];

// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM tnf.roundexercise WHERE iduser ='$iduser' order by date desc limit 10";


$result = $conn->query($sql);

if ($result->num_rows > 0) {


    while ($row[] = $result->fetch_assoc()) {
       
        $json = $row;
    }
} else {
        $json=null;
}
echo json_encode($json);
$conn->close();

?> 