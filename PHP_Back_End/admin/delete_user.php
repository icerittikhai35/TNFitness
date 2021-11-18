<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php';

// 
$sql = "DELETE FROM user WHERE  iduser = '" . $iduser . "'";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
}
$conn->close();
?>