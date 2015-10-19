 function saveComment()
 {
	 
	var cname = $('#namebox').val()
	var ctext = $('#txt1').val()
			
		if (cname ==='CLEAR ALL'){
				deleteComments();
			} 
			else 
			{
				if (cname === '') //if name box is left blank, the name is going to be changed into Anonymous
				{
					cname = 'Anonymous';
					alert('Your name is going to be change to Anonymous')
				};
			}
	var thour = new Date().getHours()
		
			if (thour<10)	//chaging format for hours that there would be a 0 before the numbers
			{
					thour= "0"+thour;
			}
		
	var tminutes = new Date().getMinutes()
		
			if (tminutes<10)	//chaging format for minutes that there would be a 0 before the numbers
			{
					tminutes= "0"+tminutes;
			}
		
	var tday = new Date().getDate()
	var tmonth = new Date().getMonth()
	var tyear = new Date().getFullYear()
		
	var cmtlist = '<p><class="cmtname" span><b>'+cname+' '+tday+'/'+(tmonth+1)+'/'+tyear+' '+thour+':'+tminutes+'</b></span></br>'+ctext+'</p>';
	$('#cmtlist').append(cmtlist);
	
	var cmtlist2 = document.getElementById('cmtlist').innerHTML;
	localStorage.setItem('comm',cmtlist2);
	
	clearComment();
	};

function loadStorage()
	{
	var cmtlist = localStorage.getItem('comm');
	$('#cmtlist').append(cmtlist);
	};
function clearStorage()
	{
	localStorage.removeItem('comm');
	window.location.reload()
	};

window.onload = function loadComment()
	{
		var cmtlist = localStorage.getItem('comm');
		$('#cmtlist').append(cmtlist);
	};
