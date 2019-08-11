<?php
 
 $HostName = "localhost";
 $DatabaseName = "admin";
 $HostUser = "root";
 $HostPass = "";
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);

 
 $B_GB =$obj['blood_group'];
 
 $B_Pint=$obj['blood_pint_no'];
 
 
//  $Sql_Query = "insert into addblood(blood_group,blood_pint_no) values ('$B_GB','$B_Pint') WHERE ";



$Sql_Query = "insert into checkingg(blood_group,blood_pint_no) values ('$B_GB','$B_Pint')";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Successfully Inserted Into MySQL Database.' ;
 
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