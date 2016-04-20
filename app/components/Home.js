var React = require('react'),
    CityInputContainer = require('../containers/CityInputContainer'),
    extend = require('extend'),
    styles = require('../styles');


var homeStyles = extend({}, styles.bgImage, styles.fullPage, styles.flexCenter);


var Home = function(props) {
    return (
        <div style={homeStyles}>
            <h1 style={{color: "#fff", fontSize: "45px"}}>Enter a City and State</h1>
            <CityInputContainer flexDirection="column" />
        </div>
    )
};


module.exports = Home;
