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