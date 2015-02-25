<?php 
//starts a session to track data from different pages
session_start();
//includes the database connection
include ('include/dbconnect.php');
//sets the get parameter to $action (actions.php?action=addProjects)
$conn->select_db("hoffmandev");
$query= 'SELECT id, street, city, state, zip, storeID, storeType, lat, lon FROM hofmann_stores WHERE id';
$rs = mysqli_q($query);
$addresses=array("Ignore This Line");


	 

foreach ($rs as $r){
		$store=$r['id'] .". ".$r['street'] . " " . $r['city']. " " . $r['state'] . " , " . $r['zip']  . " , " . $r['storeID']  . " , " . $r['storeType']  . " , (" . $r['lat']  . " , " . $r['lon']. ")";
		array_push($addresses,$store);
	
}
foreach($addresses as $val) {
   echo("<p>".$val);
	
} 

 


mysql_close($conn);	
?>


