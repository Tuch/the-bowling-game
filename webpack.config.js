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
            path.join(__dirname, 'src')
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
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].html'
            },
            {
                test: /\.jst/,
                loader: 'jst'
            },
            {
                test: /\.json/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                exclude: [ /src\/views/ ],
                loader: [
                    'style',
                    'css?sourceMap'
                ].join('!')
            },
            {
                test: /\.css$/,
                exclude: [ /src\/css/ ],
                loader: [
                    'style',
                    'css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'
                ].join('!')
            }
        ]
    },
    devtool: 'inline-source-map'
};

