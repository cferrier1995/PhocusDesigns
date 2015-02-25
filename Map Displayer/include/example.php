<?php 
//starts a session to track data from different pages
session_start();
//includes the database connection
include('includes/dbConnect.php');

//the following example uses the mysqli_q function that is declared in the dbconnect file
$query = "SELECT name, address FROM tablename";
$rs = mysqli_q($query);

//you can loop through the array as shown here.  the function returns an
//associative array, so all you need to do is $r['nameOfColumn']
foreach ($rs as $r)
	 echo "<li>".$r['name']."</li>";
	 
//there will be times moving forward that you will need to
//prepare the query with input from the user. this is why
//you use mysqli so that you can do prepared statments which
//scrub the content from the user before running the query

$sql = "SELECT name FROM table WHERE id = ?";
$params = array($_GET['id']); 
$rs = mysqli_q($sql,'i',$params);

//notice the ? in the query, and then notice the mpq function
//now has 2 extra parameters.  The 'i' is telling the sql that the
//parameter is an integer. the other options are 'd' for double
// and 's' for string. 

//if you need to pass more than one parameter,
//perhaps with multiple inserts, you list them like this: 'ssi' 
//(two string and an integer) or 'ids' (integer, double, and a string)
//and the parameters passed should be an array as below

$sql = "SELECT name FROM table WHERE name = ? OR name = ?";
$params = array("Chad","Greg"); 
$rs = mysqli_q($sql,'ss',$params);