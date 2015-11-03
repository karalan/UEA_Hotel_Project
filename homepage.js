window.onload = testScreen;
	function testScreen(){
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

   alert('Mobile');
}
else {
   alert('Desktop');
   }}