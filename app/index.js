var React = require('react'),
    ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello from React!</h1>
        ) 
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
