"use strict";
	function clearComment(){
		$('#commbox').val('');
		$('#namebox').val('Your Name Here');

	}; //changed clear function to this so that users can't clear comments from other users but admin can.
	function saveComment(){
		var cname = $('#namebox').val();
		var ctext = $('#commbox').val();

			//Checking if CLEARALL was written, if yes, will clear all comments.
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

	function callCMT(){
					//This part will load comment from local storage to display them when the page is refreshed
			var cmtlist = localStorage.getItem('comm');
			$('#cmtlist').append(cmtlist);
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
addLoadEvent(callCMT);
addLoadEvent(testScreen);