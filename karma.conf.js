module.exports = function(config) {
    config.set({
        frameworks: [
            'jasmine'
        ],

        reporters: [
            'spec'//, 'coverage'
        ],

        files: [
            'test-context.js'
        ],

        preprocessors: {
            'test-context.js': ['webpack', 'sourcemap']
        },

        singleRun: false,

        browsers: [
            'Chrome'
        ],

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        webpack: require('./webpack.config.js'),

        webpackMiddleware: {
            noInfo: true
        }
    });
};
