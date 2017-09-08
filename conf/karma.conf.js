const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../src/**/test/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      '../src/**/*.js': ['webpack', 'sourcemap'],
      '../src/**/test/*.js': ['webpack', 'sourcemap']
    },

    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['airbnb']
            }
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.(css|scss)$/,
            loaders: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
              'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        "jsdom": "window",
        "cheerio": "window",
        'react/addons': true,
      }
    },

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],
    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
