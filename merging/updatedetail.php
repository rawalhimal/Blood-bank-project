<?php
 
 $HostName = "localhost";
 $DatabaseName = "admin";
 $HostUser = "root";
 $HostPass = "";
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
 // Populate Student ID from JSON $obj array and store into $S_Name.
 $Name = $obj['full_name'];
 $Phone_Number = $obj['contact'];
 $No_Of_Pint= $obj['no_of_pint'];
 $Address = $obj['address'];
 $Blood_Group= $obj['blood_group'];
 
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = " UPDATE adddetail SET  full_name= '$Name' , contact='$Phone_Number', no_of_pint = '$No_Of_Pint', address= '$Address', blood_group = '$Blood_Group' WHERE contact='$Phone_Number' ";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'update successfull' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try againn';
 
 }
 mysqli_close($con);
?>