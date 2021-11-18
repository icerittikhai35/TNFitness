Tanawat Chaijaroen
<?php
include 'connect.php';

$userid = $_GET['id'];
$udogid = $_GET['udogid'];
$year = $_GET['year'];


// Creating SQL command to fetch all records from Table.
$sql = "SELECT evovalue,DAY(date) AS day,Month(date) as month from dog.graphevo where uid = $userid and udogid = $udogid and 
date between '$year-01-01' and '$year-12-31' order by date asc;";

$result = $conn->query($sql);

if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);

 
 }
 
} else {
 
    $item = 'null';
 
    $json = json_encode($item);
    
}
 echo $json;
$conn->close();
?>