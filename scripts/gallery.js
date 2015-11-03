	
//This script is going to change the larges picture in the gallery by the one which is going to be pressed in the thumbnails
	function gallery(){
			alert('gallery loading');
			$('#images_thumbnails a').click(function(){
				var newImageSrc = $(this).attr('href');
				$('#images_full img').attr({'src': newImageSrc });
				return false;
			})
	}
	
//This script is checking if mobile device is being use. After that it will assign proper navigation style to the website.  

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

//This is a code by Simon Willison. It's allowing us to start a few function that start on page loading.
	function addLoadEvent(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function')
			{
				window.onload = func;
			} else {
				window.onload = function(){
				if (oldonload)
				{
					oldonload();
				}
			func();
			}
		}
	}
addLoadEvent(gallery);
addLoadEvent(testScreen);