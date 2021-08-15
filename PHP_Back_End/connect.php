<?php
$servername = "34.87.175.4";
$username = "root";
$password = "Ice23106682/";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$email);
$dbselect = mysqli_select_db($conn,"tnf");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


?>
