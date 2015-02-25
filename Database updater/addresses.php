<?php 
//starts a session to track data from different pages
session_start();
//includes the database connection
include ('include/dbconnect.php');
//sets the get parameter to $action (actions.php?action=addProjects)
$conn->select_db("hoffmandev");
$query= 'SELECT street, city, state, zip FROM hofmann_stores WHERE id';
$rs = mysqli_q($query);
$addresses=array("ignore");


	 

foreach ($rs as $r){
		$store=$r['street'] . " " . $r['city']. " " . $r['state'] . " , " . $r['zip'];
		array_push($addresses,$store);
	
}

echo json_encode($addresses);
mysql_close($conn);	
?>


