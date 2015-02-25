function updatedb(lat,lng,id){
$.get("dbqueryentry.php", {'latitude': lat, 'longitude': lng, 'street': street, 'city': city, 'state': state, 'zip': zip, 'storeid': storeid, 'storetype': storetype },
	function(data){
	$(document.body).append(data);
	
});


}

