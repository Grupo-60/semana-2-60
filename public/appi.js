
var city = "Medellin";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=4c4a8289d08032f71324dff93b8f111e&lang=es", function (data) {
    console.log(data);

    var icon =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp) +"°C";
    var info = data.weather[0].description;
    var pressure = data.main.pressure + "hPa";
    var humidity = "Humedad: " + data.main.humidity + "%";


    $('.icon').attr('src', icon);
    $('.temp').append(temp);
    $('.info').append(info);
    $('.pressure').append(pressure);
    $('.humidity').append(humidity);


});

