var React = require('react'),
    styles = require('../styles');

require('../styles/weather-icons.min.css');


var Forecast = function(props) {
    return (
        <div>
            <h1>Forecast Component</h1>
            <i className="wi wi-day-sunny" style={styles.weatherIcon}></i>

        </div>
    )
};


module.exports = Forecast;
