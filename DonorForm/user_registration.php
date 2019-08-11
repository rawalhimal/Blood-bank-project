<?php
 
// Importing DBConfig.php file.

//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "donor";
 
//Define your database username here.
$HostUser = "root";
 
//Define your database password here.
$HostPass = "";
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 

$obj = json_decode($json,true);
 
 
$Name = $obj['donor_name'];
 $Address = $obj['donor_address'];
 $Email = $obj['email'];
 $Blood_Group= $obj['blood_group'];
 $Phone_Number = $obj['phone_number'];
 $Date_Of_Birth= $obj['date_of_birth'];
 
//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM donerregistration WHERE email='$Email'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
 
if (isset($check)){
 
    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
    
    // Converting the message into JSON format.
   $EmailExistJson = json_encode($EmailExistMSG);
    
   // Echo the message.
    echo $EmailExistJson ; 
}
elseif ($Name=='' ||  $Address=='' || $Email=='' || $Blood_Group=='' || $Phone_Number =='' || $Date_Of_Birth=='')
 {
     $error="Fill the all values";
      
// Converting the message into JSON format.
$abc = json_encode($error);
 
// Echo the message.
 echo $abc ;
 
 }
 elseif(preg_match('/^[a-zA-Z0-9]{5,}$/', $Name)) { // for english chars + numbers only
    // valid username, alphanumeric & longer than or equals 5 chars
    $erro="enter correct name";
      
    // Converting the message into JSON format.
    $ab = json_encode($erro);
     
    // Echo the message.
     echo $ab;
}

 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into  donerregistration (donor_name,donor_address,email,blood_group,phone_number,date_of_birth) values ('$Name','$Address','$Email','$Blood_Group','$Phone_Number','$Date_Of_Birth')";
 
 
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
 }
 mysqli_close($con);
?>