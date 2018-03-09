//get users location
(function getLocation() { 

    //check if browser supports Geolocation
    var weatherDiv = document.querySelector("#weather");

    if (!navigator.geolocation) {
        weatherDiv.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
    }

    function error() {
        weatherDiv.innerHTML = "Unable to retrieve your location";
    }

    weatherDiv.innerHTML = "<p>Fetching Weather…</p>";

    navigator.geolocation.getCurrentPosition(success, error);

})();






//make api call
// const API = "hello";


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//     });
//   }


//See weather in current location


//different icons for each weather condition


//toggle between Fahrenheit and Celsius by pressing/clicking temp icon