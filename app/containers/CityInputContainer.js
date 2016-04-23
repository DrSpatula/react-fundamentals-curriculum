var React = require('react'),
    weather = require('../util/weather-api'),
    CityInput = require('../components/CityInput');


var CityInputContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

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

        if (cityname !== "") {
            this.context.router.push('/Forecast/' + cityname);
        }
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
