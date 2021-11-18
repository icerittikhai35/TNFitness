<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php';

// 
$idalbum_healthy = $_GET['idalbum_healthy'];
$sql = "DELETE FROM album_healthy WHERE  idalbum_healthy = '" . $idalbum_healthy . "'";

if ($conn->query($sql) === TRUE) {
  echo "ลบข้อมูลเสร็จสิ้น";
} else {
  echo "Error deleting record: " . $conn->error;
}
$conn->close();
?>