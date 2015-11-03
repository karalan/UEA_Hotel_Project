"use strict";
    function bnbinfo (){
    confirm('B&B Rate includes any option from our breakfast menu within the price stated','Help Info');
    };
    function hbinfo (){
    confirm('Half Board Rate includes any option from our breakfast menu within the' +
        'price stated as well as a Three Course Evening Meal in our Hotel Restaurant');
    };
    function redirect (){
    alert('Redirecting you to our booking partner.....');
        window.location="http://www.booking.com";
    };
    $(document).ready(function() {
        $("#help1").click(bnbinfo);
        $("#help2").click(hbinfo);
    });

