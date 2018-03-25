    //check if browser supports Geolocation
    var weatherDiv = document.querySelector("#weather");

//get users location
(function getLocation() { 



    if (!navigator.geolocation) {
        weatherDiv.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    // weatherDiv.innerHTML = "<p>Fetching Weather…</p>";

    navigator.geolocation.getCurrentPosition(success, error);

})();// <-- end of self executing function

function success(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // console.log("latitude: " + latitude);
    // console.log("longitude: " + longitude);

    getWeather(latitude, longitude);
}

function error() {
    weatherDiv.innerHTML = "Unable to retrieve your location";
}

function getWeather(lat, lon) {

    //make api string
    var API = "https://api.openweathermap.org/data/2.5/weather?";
    const APPID = "7e920aa5922699c84595cabb1f9e503f";

    API += "lat=" + lat + "&" + "lon=" + lon;
    API += "&appid=" + APPID;
    //console.log(API);
    //sample api call: https://api.openweathermap.org/data/2.5/weather?lat=27&lon=-82&appid=7e920aa5922699c84595cabb1f9e503f

    //fetch api
    fetch(API)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            console.log(myJson.weather[0].main); //kelvin
            console.log(myJson.weather[0].description);
            console.log(myJson.weather[0].id);
            console.log(myJson.name);
            console.log(myJson.sys.country);
            console.log("Temp(K): " + myJson.main.temp);
            // weatherDiv.innerHTML = JSON.stringify(myJson);
            
            //convert K to F
            var k = Math.floor(myJson.main.temp);
            var fahrenheit = Math.floor(9/5*(k-273)+32);
            var celsius = Math.floor(k - 273.15);
            console.log("fahrenheit: " + fahrenheit);
            console.log("celsius: " + celsius);

            //convert K to C

            // From               to Fahrenheit        to Celsius
            // Fahrenheit (F)	  F	                   (F - 32) * 5/9
            // Celsius(C or o)	 (C * 9/5) + 32	       C
            // Kelvin(K)	     9/5(K - 273.15)+32    K - 273.15

            //https://openweathermap.org/weather-conditions

        });
    
    console.log("Done");
    
}








//See weather in current location


//different icons for each weather condition


//toggle between Fahrenheit and Celsius by pressing/clicking temp icon