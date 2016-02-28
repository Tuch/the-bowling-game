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
        preLoaders: [
            //for coverage
            //{
                //test: /\.js$/,
                //exclude: [
                    ///node_modules/,
                    ///\.test\.js$/
                //],
                //loader: 'isparta-instrumenter'
            //}
        ],
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
                test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg|\.woff2?|\.eot|\.ttf/,
                loader: 'file'
            },
            {
                test: /\.css$/,
                exclude: [ /src\/views/ ],
                loader: [
                    'style/url',
                    'file',
                    'extract',
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

