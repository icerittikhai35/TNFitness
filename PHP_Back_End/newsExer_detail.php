<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
include 'connect.php';

$idnew_feed_exer = $_GET["idnew_feed_exer"];

// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM new_feed_exer WHERE idnew_feed_exer = '$idnew_feed_exer'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {


    while ($row[] = $result->fetch_assoc()) {
        $sql1 = "SELECT * FROM new_feed_exer where idnew_feed_exer = '$idnew_feed_exer'";
        $result1 = mysqli_query($conn, $sql1);
        $row1 = mysqli_fetch_assoc($result1);
        $item = $row;
        $Topic_new_feed_exer = $row1['Topic_new_feed_exer'];
        $Material_new_feed_exer = $row1['Material_new_feed_exer'];
        $Date = $row1['Date'];
        $url = $row1['url'];
        $json = $item;
        $output =  array('all' => $json, 'Topic_new_feed_exer' => $Topic_new_feed_exer,'Material_new_feed_exer' => $Material_new_feed_exer,'Date' => $Date,'url' => $url);
    }
} else {
    echo "No Results Found.";
}
echo json_encode($output);
$conn->close();

?>