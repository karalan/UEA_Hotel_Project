//Expanding Divs in Local Area page TODO: needs to close one when another is clicked
		$(document).ready(function() {
			$("#hotelbutton").click(function () {
				$("#hoteltxt").slideToggle("slow");
			});
			$("#shopbutton").click(function () {
				$("#shoptxt").slideToggle("slow");
			});
			$("#eatbutton").click(function () {
				$("#eattxt").slideToggle("slow");
			});
			$("#barsbutton").click(function () {
				$("#barstxt").slideToggle("slow");
			});
			$("#attbutton").click(function () {
				$("#atttxt").slideToggle("slow");
			});
		});