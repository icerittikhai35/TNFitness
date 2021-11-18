<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php';

// 
$idnew_feed_health_food = $_GET['idnew_feed_health_food'];
$sql = "DELETE FROM new_feed_health_food WHERE  idnew_feed_health_food = '" . $idnew_feed_health_food . "'";

if ($conn->query($sql) === TRUE) {
  echo "ลบข้อมูลเสร็จสิ้น";
} else {
  echo "Error deleting record: " . $conn->error;
}
$conn->close();
?>