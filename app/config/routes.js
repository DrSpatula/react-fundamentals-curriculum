var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var Main = require("../components/Main"),
    Home = require("../components/Home"),
    ForecastContainer = require('../containers/ForecastContainer');


var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="Forecast/:city" component={ForecastContainer} />
        </Route>
    </Router>
);


module.exports = Routes;
