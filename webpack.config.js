var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, './src/app.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        root: [
            path.join(__dirname)
        ]
    },
    module: {
        //preLoaders: [
            //{
                //test: /\.js$/,
                //exclude: [
                    ///node_modules/,
                    ///\.test\.js$/
                //],
                //loader: 'isparta-instrumenter'
            //}
        //],
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].html'
        }, {
            test: /\.jst/,
            loader: 'jst'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.json/,
            loader: 'json'
        }]
    },
    devtool: 'inline-source-map'
};

