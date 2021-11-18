<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php';

// 
$idalbum_exer = $_GET['idalbum_exer'];
$sql = "DELETE FROM album_exer WHERE  idalbum_exer = '" . $idalbum_exer . "'";

if ($conn->query($sql) === TRUE) {
  echo "ลบข้อมูลเสร็จสิ้น";
} else {
  echo "Error deleting record: " . $conn->error;
}
$conn->close();
?>