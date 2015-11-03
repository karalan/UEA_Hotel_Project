	window.onload = gallery; //This script is going to change the larges picture in the gallery by the one which is going to be pressed in the thumbnails
	function gallery(){
			alert('gallery loading');
			$('#images_thumbnails a').click(function(){
				var newImageSrc = $(this).attr('href');
				$('#images_full img').attr({'src': newImageSrc });
				return false;
			})
	}