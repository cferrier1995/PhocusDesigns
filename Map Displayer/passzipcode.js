//Gets
function getarray(){
$.get("queryzip.php",
function(data){
addresses=jQuery.parseJSON(data);
$(document.body).append(addresses['lat'][9]);

	
	
});


}
