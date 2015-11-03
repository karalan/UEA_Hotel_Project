//Embedding of Google Map
	function initialize() {
		var mapCanvas = document.getElementById('map');
	  	var LatLng = new google.maps.LatLng(52.940363, 0.488892)
		var mapOptions = {
			center: LatLng,
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP	};
		var map = new google.maps.Map(mapCanvas, mapOptions)
		var marker = new google.maps.Marker({
    		position: LatLng,
    		map: map,
    		title: 'The Golden Lion Hotel'
  });
  }
  
//This script is checking if mobile device is being use. After that it will assign proper navigation style to the website.  
window.onload = testScreen;
	function testScreen(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			var mcontent = $('<tr><td><a href="index.html">Home</a></td></tr><tr><td><a href="booking.html">Booking</a></td></tr><tr><td><a href="gallery.html">Gallery</a></td></tr><tr><td><a href="localarea.html">Local Area</a></td></tr><tr><td><a href="directions.html">Find Us</a></td></tr><tr><td><a href="review.html">Reviews</a></td></tr><tr><td><a href="contact.html">Contact</a></td></tr>');
			$('#nav').append(mcontent);
		}

		else {
			var dcontent = $('<tr><td><a href="index.html">Home</a></td><td><a href="booking.html">Booking</a></td><td><a href="gallery.html">Gallery</a></td><td><a href="localarea.html">Local Area</a></td><td><a href="directions.html">Find Us</a></td><td><a href="review.html">Reviews</a></td><td><a href="contact.html">Contact</a></td></tr>');
			$('#nav').append(dcontent);
		}

   }