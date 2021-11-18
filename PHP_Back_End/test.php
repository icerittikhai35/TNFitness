<?php
include 'connect.php';



$json = json_decode(file_get_contents('php://input'), true);

$iduser = $_GET["iduser"];

$data = array();



$sql = "SELECT day FROM tnf.manageexercise where iduser = '$iduser' group by day;";

$result = $conn->query($sql);



function getdata($day) {

   $dataProgram = array();   
   $program = null;
   $iduser = $_GET["iduser"];
   
   
   $servername = "35.187.238.139";
   $username = "root";
   $password = "Ice23106682";
   
   $conn = mysqli_connect($servername, $username, $password);
   $dbselect = mysqli_select_db($conn,"tnf");
   
   if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
   }
   
         $result = mysqli_query($conn, "SELECT * FROM data_exersice join manageexercise 
         on data_exersice.id_exersice = manageexercise.idexercise where manageexercise.iduser = '$iduser' AND manageexercise.day = '$day';");
   
   
         if ($result->num_rows >0) {
    
    
           while($row[] = $result->fetch_assoc()) {
           
          $dataProgram = $row;
           
           }
           
          } else {
           $dataProgram = [];
          }
   
         return  $dataProgram;
   
         }






if ($result->num_rows >0) {
 
 
    while($row = $result->fetch_assoc()){
 
        $db_data[$row["day"]] = getdata($row["day"]);
 
 $json = json_encode($db_data);
 
 }
 
} else {
$json = 'null';
}
 echo $json;


$conn->close();
?>
