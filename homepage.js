"use strict";
	function clearComment(){
		if ($('#namebox').val () === 'CLEARALL'){
			clearStorage();
		};
		$('#commbox').val('');
	}; //changed clear function to this so that users can't clear comments from other users but admin can.
	function saveComment(){
		var cname = $('#namebox').val();
		var ctext = $('#commbox').val();

			//if (cname ==='CLEAR ALL'){
			//		clearStorage();
			//	}
			//	else
			//	{
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

		var cmtlist = '<p><class="cmtname" span><b>'+cname+' '+tday+'/'+(tmonth+1)+'/'+tyear+' '+thour+':'+tminutes+'</b></span></br>'+ctext+'</p>';
		$('#cmtlist').append(cmtlist);

		var cmtlist2 = document.getElementById('cmtlist').innerHTML;
		localStorage.setItem('comm',cmtlist2);

		kclearComment();
		};

	function loadStorage()
		{
		var cmtlist = localStorage.getItem('comm');
		$('#cmtlist').append(cmtlist);
		};
	function clearStorage()
		{
		localStorage.removeItem('comm');
		window.location.reload();
		};

	window.onload = function loadComment()
		{
			var cmtlist = localStorage.getItem('comm');
			$('#cmtlist').append(cmtlist);
		};
