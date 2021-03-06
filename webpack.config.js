var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },

    module: {
        loaders: [
            {test: /\.js$/, include: __dirname + '/app', exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$/, loader: "file" }
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
}

