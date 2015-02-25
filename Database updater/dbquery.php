<?php 
session_start();
include ('include/dbconnect.php');
$conn->select_db("hoffmandev");
$longitude = $_GET['longitude'];
$latitude = $_GET['latitude'];
$id= $_GET['id'];
$query= "update hofmann_stores set lat= $latitude, lon= $longitude where id= $id";
$conn->query( $query );
if( $conn->query($query) ) {
        //if updating the record was successful
      ;
    }else{
        //if update failed
        echo "Database Error: $conn->error ";
    }
$conn->close();
?>
