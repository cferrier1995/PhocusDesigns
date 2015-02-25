function getarray(){
	alert("test");
	$.getJSON("addresses.php", function(data){
	var i=0;
	while(i<data.passarray.length){
		addresses[i]=data.passarray[i];
		i++;
	 }
}
}