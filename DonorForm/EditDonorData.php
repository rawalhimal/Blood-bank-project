<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student ID from JSON $obj array and store into $S_Name.
 $Donor_Id= $obj['donor_id'];
 
 $Donor_Name = $obj['donor_name'];
 
 // Populate Student Class from JSON $obj array and store into $S_Class.
 $Address = $obj['donor_address'];
 
 // Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
 $Email = $obj['email'];
 
 // Populate Email from JSON $obj array and store into $S_Email.
 $Blood_Group= $obj['blood_group'];
 $Phone_Number = $obj['phone_number'];
 $Date_Of_Birth= $obj['date_of_birth'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = " UPDATE donerregistration SET  donor_name= '$Donor_Name' , donor_address='$Address', email = '$Email', blood_group = '$Blood_Group', phone_number='$Phone_Number', date_of_birth='$Date_Of_Birth' WHERE donor_id='$Donor_Id' ";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Successfully Inserted Into MySQL Database.' ;
 
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