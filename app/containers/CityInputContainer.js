var React = require('react'),
    CityInput = require('../components/CityInput');


var CityInputContainer = React.createClass({
    getInitialState: function() {
        return {
            cityname: ''
        }
    },

    handleUpdateCity: function(e) {
        this.setState({
            cityname: e.target.value
        })
    },

    handleSubmitCity: function(e) {
        e.preventDefault();

        var cityname = this.state.cityname;
        this.setState({
            cityname: ''
        });

        console.log(cityname);
    },

    render: function() {
        return(
            <CityInput
                onUpdateCity={this.handleUpdateCity}
                onSubmitCity={this.handleSubmitCity}
                cityname={this.state.cityname}
                flexDirection={this.props.flexDirection} />
        )
    }
});


module.exports = CityInputContainer;
