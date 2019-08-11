<?php
 
 $HostName = "localhost";
 $DatabaseName = "admin";
 $HostUser = "root";
 $HostPass = "";
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
 $Name = $obj['full_name'];
 $Phone_Number = $obj['contact'];
 $No_Of_Pint= $obj['no_of_pint'];
 $Address = $obj['address'];
 $Blood_Group= $obj['blood_group'];
 
 
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "insert into adddetail(full_name,contact,no_of_pint,address,blood_group) values ('$Name','$Phone_Number','$No_Of_Pint','$Address','$Blood_Group')";
 //$Sql_Query="select * from donorregistration";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record successfully added' ;
 
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