<?php 
session_start();
include ('include/dbconnect.php');
$conn->select_db("hoffmandev");
$query="SELECT street, city, state, zip, lat, lon FROM hofmann_stores" ;
$rs = mysqli_q($query);
$addresses=array(
"lat"=>array(),
"lng"=>array(),
"address"=>array(),
"zip"=>array()
);

foreach ($rs as $r){

		$address=$r['street'] . " " . $r['city']. " " . $r['state'] . " , " . $r['zip'];
		array_push($addresses['address'],$address);
		$zip=$r['zip'];
		array_push($addresses['zip'],$zip);
		$lat=$r['lat'];
		array_push($addresses['lat'],$lat);
		$lng=$r['lon'];
		array_push($addresses['lng'],$lng);
}

echo json_encode($addresses);

mysql_close($conn);	
?>