<?php
include 'connect.php';

$id=$_GET["id"];
// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM tnf.album_exer where idnew_feed_exer = '$id';";

$result = $conn->query($sql);

if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 
 }
 
} else {
    $json = 'null';
}
 echo $json;
$conn->close();
?>
