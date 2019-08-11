<?php
// Importing DBConfig.php file.

$HostName = "localhost";
$DatabaseName = "info";
$HostUser = "root";
$HostPass = "";
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate name from JSON $obj array and store into $name.
$name = $obj['information_info'];

 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into infotable (information_info) values ('$name')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Sent successfull' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 

}
 mysqli_close($con);
?>