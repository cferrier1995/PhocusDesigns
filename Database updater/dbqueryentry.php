<?php 
session_start();
include ('include/dbconnect.php');
$conn->select_db("hoffmandev");
$longitude = $_GET['longitude'];
$latitude = $_GET['latitude'];
$street= $_GET['street'];
$city= $_GET['city'];
$state= $_GET['state'];
$zip= $_GET['zip'];
$storeid= $_GET['storeid'];
$storetype= $_GET['storetype'];



 if ($result = $conn->prepare("SELECT MAX(`id`) AS 'id' FROM `hofmann_stores`"))
 {
	
    $result->execute();
	$result->bind_result($max);
	while ($result->fetch()) {
    Echo("New ID: ". $max . " ");
	
}

}
else
echo("Error: " + $conn->error);

$id=$max+1;

$sql="INSERT INTO hofmann_stores (id ,street,city,state,zip,storeID,storeType,lat,lon) VALUES(? ,?, ?, ?, ?, ?, ?, ?, ?)";
if($query= $conn->prepare($sql))
{
$query->bind_param('sssssssss', $id, $street,$city,$state,$zip,$storeid,$storetype,$latitude,$longitude);
$query->execute();
echo("<p> Successfully updated database!");
echo("<p> To View the new entry, and all other entrys go to <a href=addresses.php>The Addresses page </a>" );

}

else
echo("\n Error: " + $conn->error);



$conn->close();

?>