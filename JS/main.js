$.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&apikey=bc92fe5c1622001ce51ccfcdcccb232b",
    type:'GET',
    dataType:'json',
    success:function(data){
        var weatherData = data;
        
        console.log(weatherData.main.temp);
        $("#weatherCelcius").html('Temperature Central London &#8451:'+weatherData.main.temp);
    }
});


    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibWFqZXN0MWMiLCJhIjoiY2p4YWN2ZzBsMDd4ZDNvbW01b3E2cndkMCJ9.bA5dCHSKze7UcMI7O9hBSg'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var coordinartesArray = [
[51.533863, -0.11577],
[51.515032, -0.04446],  
];
for(var i = 0; i < coordinartesArray.length; i++){
L.marker(coordinartesArray[i]).addTo(mymap);
}
marker.bindPopup("<b>Wassup Martians</b><br>Land here!.").openPopup();
//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");

var popup = L.popup()
.setLatLng([51.5, -0.09])
//.setContent("I am a standalone popup.")
//.openOn(mymap);

var popup = L.popup();

function onMapClick(e) {

popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);


