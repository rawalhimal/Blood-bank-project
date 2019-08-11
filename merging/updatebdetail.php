<?php
 
 $HostName = "localhost";
 $DatabaseName = "admin";
 $HostUser = "root";
 $HostPass = "";
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
  
 $B_ID =$obj['bid'];
 
 $B_GB =$obj['blood_group'];
 
 $B_Pint=$obj['blood_pint_no'];
 
 //$Sql_Query ="UPDATE addblood SET blood_group='$B_GB',blood_pint_no='$B_Pint' WHERE blood_group='$B_GB'";

 $Sql_Query ="UPDATE checkingg SET blood_group='$B_GB',blood_pint_no='$B_Pint' WHERE bid='$B_ID'";


 
 if(mysqli_query($con,$Sql_Query)){
 
$MSG = 'Record Updated' ;
 
$json = json_encode($MSG);
 
echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>