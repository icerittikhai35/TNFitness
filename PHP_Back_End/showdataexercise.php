<?php
include 'connect.php';


// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM data_exersice order by category_exersice asc;";

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
