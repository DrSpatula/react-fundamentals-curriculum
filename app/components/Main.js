var React = require('react'),
    Header = require('../components/Header');


var Main = function(props) {
    return (
        <div style={{width: "100%", height: "92%"}}>
            <Header />
            {props.children}
        </div>
    )
};


module.exports = Main;
