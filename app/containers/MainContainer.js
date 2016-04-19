var React = require('react'),
    ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h2>Hello world. Your friend, React.</h2>
        ) 
    }
});

module.exports = HelloWorld;
