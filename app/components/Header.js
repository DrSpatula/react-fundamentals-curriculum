var React = require('react'),
    CityInput = require('../components/CityInput'),
    styles = require('../styles');


var Header = function(props) {
    return(
        <div style={styles.header}>
            <h2 style={{margin: "0"}}>Clever Title</h2>
            <CityInput flexDirection={{flexDirection: "row"}} />
        </div>
    )
};


module.exports = Header;
