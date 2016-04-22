var axios = require('axios');

var api_key = "5cd1723446ec74a21f70a2885167780e";


var getCurrentWeather = function(cityname) {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&type=accurate&APPID=" + api_key);
};


var getFiveDayForecast = function(cityname) {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast/weather?q=" + cityname + "&type=accurate&APPID=" + api_key);
};


var weather = {
    getWeatherData: function(cityname) {
        getCurrentWeather(cityname).then(function(info) {
            console.log(info.data);    
        });
    },

    getForecastData: function(cityname) {
        getFiveDayForecast(cityname).then(function(info) {
            console.log(info.data);
        });
    }
};


module.exports = weather;
