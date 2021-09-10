<?php
$servername = "35.187.238.139";
$username = "root";
$password = "Ice23106682";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$email);
$dbselect = mysqli_select_db($conn,"tnf");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


?>
