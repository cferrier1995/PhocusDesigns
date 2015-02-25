<?php 
session_start();
include ('include/dbconnect.php');
$conn->select_db("hoffmandev");
$zip= $_GET['zip'];
$query= 'SELECT street, city, state, zip, lat, lon FROM hofmann_stores' ;
$rs = mysqli_q($query);
$addresses=array();

foreach ($rs as $r){
		$store=$r['street'] . " " . $r['city']. " " . $r['state'] . " Coordinates: " . $r['zip']  . "  " .$r['lat']  . "  " . $r['lon'];
		array_push($addresses,$store);
	
	
}


echo("Error: " + $conn->error);
echo json_encode($addresses);

mysql_close($conn);	
?>