<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
require_once "connect.php";

$json = json_decode(file_get_contents('php://input'), true);

$idnews = $json["idnew_feed_health_food"];
$topic = $json["Topic_new_feed_health_food"];
$material = $json["Material_new_feed_health_food"];
$date = $json["Date"];
$url = $json["url"];



$query1 = "UPDATE new_feed_health_food SET 
        Topic_new_feed_health_food='$topic',
        Material_new_feed_health_food='$material',
        Date='$date',
        url='$url'
         WHERE idnew_feed_health_food='$idnews'";
$query_output = mysqli_query($conn, $query1);
if ($query_output) {
    $message = "NEWs ok";
    echo json_encode($message);
} else {
    echo json_encode('Yahhhhhh Fail');
}
?>