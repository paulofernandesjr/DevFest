$(document).ready(function(){
    var fiap = new google.maps.LatLng(-23.564339, -46.652770);
    var myOptions = {
        zoom: 15, 
        center: fiap, 
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    map = new google.maps.Map(document.getElementById("mapa"), myOptions);
    var marker = new google.maps.Marker({
        map: map, 
        position: fiap, 
        title: 'DevFest Brasil - Avenida Paulista, 1.106 - 7º andar'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'DevFest Brasil - Avenida Paulista, 1.106 - 7º andar', 
        position: fiap
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map);
    });          
                
    $(".kkcount-down").kkcountdown({
        dayText	: ' dia ', 
        daysText 	: ' dias ',
        hoursText	: ':', 
        minutesText	: ':',
        secondsText	: '', 
        displayZeroDays : false,
        callback	: do_nothing, 
        addClass	: 'shadow'
    });
});
function do_nothing(){ 
    console.log('DO NOTHING ');
}