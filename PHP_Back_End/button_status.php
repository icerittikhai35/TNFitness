


<?php


include 'connect.php';


$u_id = $_GET['u_id'];

$id_exersice = $_GET['id_exersice'];

$date = $_GET['date'];


    $data = array();

    // Creating SQL command to fetch all records from Table.
    $sql = "SELECT * FROM tnf.roundexercise where iduser = '".$u_id."' and idexercise = '$id_exersice' and date = '".$date."' ";
    
    $result = $conn->query($sql);
    if ($result->num_rows >0) {
     
        $data = array('status' => true);
    
    
    } else {
    
    
        $data = array('status' => false);
    
    }
     echo json_encode($data);


$conn->close();
?>
