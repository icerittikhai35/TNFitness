<?php
include 'connect.php';

$iduser = $_GET["id"];

// Creating SQL command to fetch all records from Table.
$sql = "SELECT * ,(YEAR(NOW()) - YEAR(birthday)) as old FROM user WHERE iduser = '" . $iduser . "'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {


    while ($row[] = $result->fetch_assoc()) {
        $sql1 = "SELECT * FROM user where iduser = '$iduser'";
        $result1 = mysqli_query($conn, $sql1);
        $row1 = mysqli_fetch_assoc($result1);
        $item = $row;
        $email = $row1['email'];
        $gender = $row1['gender'];
        $weight = $row1['weight'];
        $height = $row1['height'];
        $target = $row1['target'];
        $experience = $row1['experience'];
        $url = $row1['url'];
        $json = $item;
        $output =  array('all' => $json, 'email' => $email,'gender' => $gender,'weight' => $weight,'height' => $height,'target' => $target,'experience' => $experience,'url' => $url);
    }
} else {
    echo "No Results Found.";
}
echo json_encode($output);
$conn->close();

?>