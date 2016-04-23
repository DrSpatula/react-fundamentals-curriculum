var React = require('react'),
    Forecast = require('../components/Forecast');


var ForecastContainer = React.createClass({
    render: function() {
        return (
            <Forecast /> 
        )
    }
});


module.exports = ForecastContainer;
