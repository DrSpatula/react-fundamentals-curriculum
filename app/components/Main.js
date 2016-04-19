var React = require('react'),
    Header = require('../components/Header');


var Main = function(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
};


module.exports = Main;
