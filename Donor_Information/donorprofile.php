<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 
 $Name = $obj['donor_name'];
 
 
 $Address = $obj['donor_address'];
 
 
 $Email = $obj['email'];
 
 
 $Blood_Group= $obj['blood_group'];
 $Phone_Number = $obj['phone_number'];
 $Date_Of_Birth= $obj['date_of_birth'];
$CheckSQL = "SELECT * FROM donerregistration WHERE email='$Email'";
 
// Executing SQL Query.

 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query ="insert into donerregistration (donor_name,donor_address,email,blood_group,phone_number,date_of_birth) values ('$Name','$Address','$Email','$Blood_Group','$Phone_Number','$Date_Of_Birth')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'User Registered Successfully' ;
 
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