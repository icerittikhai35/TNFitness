<?php

$startdate = "2021/11/06";


$start = strtotime($startdate);

$final = strtotime(date("Y/m/d", strtotime("+1 month", $start)));



$data = array();



function getdata($dayofweek) {

 $dataProgram = array();   
$program = null;


$servername = "35.187.238.139";
$username = "root";
$password = "Ice23106682";

$conn = mysqli_connect($servername, $username, $password);
$dbselect = mysqli_select_db($conn,"tnf");

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


    

$category = '';

    switch ($dayofweek) {
        case 0:
            $category = 0;
          break;
        case 1:
            $category = 'Chest';
          break;
        case 2:
            $category = 'Back';
          break;
        case 3:
            $category = 0;
          break;
        case 4:
            $category = 'Shoulder';
          break;
        case 5:
            $category = 'Leg';
          break; 
        case 6:
            $category = 'Biceps and Triceps';
          break; 
        default:
        $category = 0;
      }

      $result = mysqli_query($conn, "SELECT * FROM data_exersice where category_exersice = '".$category."' ");


      if ($result->num_rows >0) {
 
 
        while($row[] = $result->fetch_assoc()) {
        
       $dataProgram = $row;
        
        
        }
        
       } else {
        $dataProgram = [];
       }




      return  $dataProgram;

      }



$currentdate = $start;
while($currentdate < $final)
{
        $cur_date = date('Y-m-d', $currentdate);

        $currentdate = strtotime('+1 day', $currentdate);

        
        $db_data[$cur_date] =  getdata(date('w', strtotime($cur_date)));

        // $db_data[] = array(
        //     $cur_date => getdata(date('w', strtotime($cur_date)))
        // );
}




echo json_encode($db_data);




?>







