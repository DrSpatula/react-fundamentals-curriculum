var React = require('react'),
    extend = require('extend'),
    styles = require('../styles');


var CityInput = function(props) {
    var styling = extend(props.flexDirection, styles.cityInput);
    return (
        <div style={styling}>
            <input
                className="form-control"
                placeholder="Buffalo, NY"
                type="text" />
            <button
                className="btn btn-success"
                style={{margin: "10px"}}
                type="button">
                Get Weather
            </button>
        </div>
    )
};


module.exports = CityInput;
