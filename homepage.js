"use strict";
	function clearComment(){
		$('#commbox').val('');
		$('#namebox').val('Your Name Here');

	}; //changed clear function to this so that users can't clear comments from other users but admin can.
	function saveComment(){
		var cname = $('#namebox').val();
		var ctext = $('#commbox').val();

			//Cheching if CLEARALL was written, if yes, will clear all comments.
			//Moved here, because CLEARALL comment was displayed just before clearing all the comments.
			if ($('#namebox').val () === 'CLEARALL'){
				clearStorage();
			}
			else{

					if (cname === 'Your Name Here') //if name box is left blank, the name is going to be changed into Anonymous
					{
						cname = ('Anonymous');
						alert('As you have not entered your name, your comment will be recorded under \'Anonymous\'');
					};

	var thour = new Date().getHours();

				if (thour<10)	//changing format for hours that there would be a 0 before the numbers
				{
						thour= "0"+thour;
				}

		var tminutes = new Date().getMinutes();

				if (tminutes<10)	//changing format for minutes that there would be a 0 before the numbers
				{
						tminutes= "0"+tminutes;
				}

		var tday = new Date().getDate();
		var tmonth = new Date().getMonth();
		var tyear = new Date().getFullYear();


		//This section is for taking the rate which user inputed and transfer it to text
		var hrate = $('#hotelrate').val();

		//This section will check which rating was given and how many start shuold be displayed in the comments
			if (hrate === '1')
				{
					var hRateStar = ('&#9734');
				}
				else{if (hrate === "2")
				{
					var hRateStar = ('&#9734&#9734');
				}
				else{if (hrate === "3")
				{
					var hRateStar = ('&#9734&#9734&#9734');
				}
				else{if (hrate === "4")
				{
					var hRateStar = ('&#9734&#9734&#9734&#9734');
				}
				else{
					var hRateStar = ('&#9734&#9734&#9734&#9734&#9734');
				}}}}
<<<<<<< HEAD

=======
				
>>>>>>> origin/master
		var cmtlist = '<p><class="cmtname" span><b>'+cname+' rated '+hRateStar+' stars '+tday+'/'+(tmonth+1)+'/'+tyear+' '+thour+':'+tminutes+'</b></span></br>'+ctext+'</p>';
		$('#cmtlist').append(cmtlist);

		//Assosiating new comments to second string for later use
		var cmtlist2 = document.getElementById('cmtlist').innerHTML;
		localStorage.setItem('comm',cmtlist2);

		//Clearing input boxes from any text
		clearComment();
			};};

	//This function will clear the local storage from any data that are displayed in the comments.
	function clearStorage()
		{
		localStorage.removeItem('comm');
		window.location.reload();
		};
	
	window.onload = callCMT;
	function callCMT(){
					//This part will load comment from local storage to display them when the page is refreshed
			var cmtlist = localStorage.getItem('comm');
			$('#cmtlist').append(cmtlist);
			
			$('#images_thumbnails a').click(function(){
				var newImageSrc = $(this).attr('href');
				$('#images_full img').attr({'src': newImageSrc });
				return false;
<<<<<<< HEAD
			});

			//This part will load comment from local storage to display them when the page is refreshed
			var cmtlist = localStorage.getItem('comm');
			$('#cmtlist').append(cmtlist);

		};
//This is to create the map
	//function initialize() {
	//	var mapCanvas = document.getElementById('map');
	//	var mapOptions = {
	//	  center: new google.maps.LatLng(44.5403, -78.5463),
	//	  zoom: 8,
	//	  mapTypeId: google.maps.MapTypeId.ROADMAP
	//	}
	//	var map = new google.maps.Map(mapCanvas, mapOptions);
	//}
//google.maps.event.addDomListener(window, 'load', initialize);


=======
			})
			alert('test');
	}
		
	
	//Scripts for map
	function initialize() {
		
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }	
>>>>>>> origin/master
