<?php
$HostName = "localhost";
$DatabaseName = "admin";
$HostUser = "root";
$HostPass = "";
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
 
// Creating SQL command to fetch all records from Table.
$sql = "SELECT * FROM adddetail";
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 
 }
 
} 

else {
 echo "No Results Found.";
}

echo $json; 
$conn->close();
?>

