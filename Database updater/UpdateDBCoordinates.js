function updatedb(lat,lng,id){
$.get("dbquery.php", {'latitude': lat, 'longitude': lng, 'id': id});

loopandupdate();
}

