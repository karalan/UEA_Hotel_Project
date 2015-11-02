"use strict";
	$(document).ready(function() {
		$("#hotelbutton").click(function () {
			$("#hoteltxt").slideToggle("slow");
			$('.localcontent').not("#hoteltxt").slideUp();
		});
		$("#shopbutton").click(function () {
			$("#shoptxt").slideToggle("slow");
			$('.localcontent').not("#shoptxt").slideUp();
		});
		$("#eatbutton").click(function () {
			$("#eattxt").slideToggle("slow");
			$('.localcontent').not("#eattxt").slideUp();
		});
		$("#barsbutton").click(function () {
			$("#barstxt").slideToggle("slow");
			$('.localcontent').not("#barstxt").slideUp();
		});
		$("#attbutton").click(function () {
			$("#atttxt").slideToggle("slow");
			$('.localcontent').not("#atttxt").slideUp();
		});
	});
