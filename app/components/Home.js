var React = require('react'),
    CityInput = require('../components/CityInput'),
    extend = require('extend'),
    styles = require('../styles');


var homeStyles = extend({}, styles.bgImage, styles.fullPage, styles.flexCenter);


var Home = function(props) {
    return (
        <div style={homeStyles}>
            <h1 style={{color: "#fff", fontSize: "45px"}}>Enter a City and State</h1>
            <CityInput flexDirection={{flexDirection: "column"}} />
        </div>
    )
};


module.exports = Home;
