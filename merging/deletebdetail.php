<?php
 
 $HostName = "localhost";
 $DatabaseName = "admin";
 $HostUser = "root";
 $HostPass = "";
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
 

 //$B_GB =$obj['blood_group'];
 
 //$Sql_Query = "DELETE FROM addblood WHERE blood_group = '$B_GB'" ;

 $B_ID = $obj['bid'];
 
 $Sql_Query = "DELETE FROM checkingg WHERE bid = '$B_ID'" ;
 
 
 if(mysqli_query($con,$Sql_Query)){
 
$MSG = 'Record Deleted Successfully.' ;
 
$json = json_encode($MSG);
 echo $json ;
  }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>