var React = require('react'),
    CityInputContainer = require('../containers/CityInputContainer'),
    styles = require('../styles');


var Header = function(props) {
    return(
        <div style={styles.header}>
            <h2 style={{margin: "0"}}>Clever Title</h2>
            <CityInputContainer flexDirection="top" />
        </div>
    )
};


module.exports = Header;
