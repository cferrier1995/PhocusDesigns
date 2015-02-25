	$(document).ready(function() {
		$("#header").load("include/menu.html");
		
		if ($("#subFooter").length)	
			$("#subFooter").load('include/footer.html');
	});
	
	counter = 0;
	function moveImage() {
	
		if ($("#slideContent").css("left") == "-2216px") {
			$("#slideContent").animate({left: "0px"}, 1000, 'easeOutQuint');
			counter = 1;
		}
		else {
			$("#slideContent").animate({left: '-=554'}, 750, 'easeOutQuint');
			counter++;
		}
	}
	
	function moveImageBack() {
	
		if ($("#slideContent").css("left") == "0px") {
			$("#slideContent").animate({left: "-=2216"}, 1000, 'easeOutQuint');
			counter = 1;
		}
		else {
			$("#slideContent").animate({left: '+=554'}, 750, 'easeOutQuint');
			counter++;
		}
	}
	
	$(window).load(function() {
		
		$("#navLeft").click(function(){
			clearInterval(interval);
			moveImageBack();
			interval = setInterval("moveImage()", 6000);
		});
		$("#navRight").click(function(){
			clearInterval(interval);
			moveImage();
			interval = setInterval("moveImage()", 6000);
		});
		$("#logo").click(function(){document.location = 'index.html'});

		interval = setInterval("moveImage()", 6000);
	});