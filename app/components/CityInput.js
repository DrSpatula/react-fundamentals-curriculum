var React = require('react'),
    PropTypes = React.PropTypes,
    extend = require('extend'),
    styles = require('../styles');


var CityInput = function(props) {
    var styling = extend({flexDirection: props.flexDirection}, styles.cityInput);
    return (
        <div style={styling}>
            <input
                onChange={props.onUpdateCity}
                className="form-control"
                placeholder="Buffalo, NY"
                type="text" />
            <button
                onClick={props.onSubmitCity}
                className="btn btn-success"
                style={{margin: "10px"}}
                type="button">
                Get Weather
            </button>
        </div>
    )
};


module.exports = CityInput;
