
 <?php
 
 $HostName = "localhost";
 $DatabaseName = "admin";
 $HostUser = "root";
 $HostPass = "";
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
 // Populate Student name from JSON $obj array and store into $S_Name.
 $Name = $obj['donor_name'];
 
 // Populate Student Class from JSON $obj array and store into $S_Class.
 $Address = $obj['donor_address'];
 
 // Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
 $Email = $obj['email'];
 
 // Populate Email from JSON $obj array and store into $S_Email.
 $Blood_Group= $obj['blood_group'];
 $Phone_Number = $obj['phone_number'];
 $Date_Of_Birth= $obj['date_of_birth'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "insert into donordata (donor_name,donor_address,email,blood_group,phone_number,date_of_birth) values ('$Name','$Address','$Email','$Blood_Group','$Phone_Number','$Date_Of_Birth')";
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