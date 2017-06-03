// Karma configuration
// Generated on Sun May 14 2017 00:01:30 GMT-0400 (EDT)

module.exports = function(config) {
  var chapter = "chapter9"
  ,srcCode = chapter + "/src/js/*.js"
  ,testCode = chapter + "/test/js/*.spec.js"
  ,testCoverage = chapter + "/test/coverage/"
  ,preprocessorConfig = {};
  preprocessorConfig[srcCode] = 'coverage';


  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-resource/angular-resource.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      srcCode,
      testCode
    ],

    // print to the terminal during karma run
    client: {
      captureConsole: false
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessorConfig,


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],    //'progress'

    // optionally, configure the spec reporter
    specReporter: {
            maxLogLines: 5,             // limit number of lines logged per test
            suppressErrorSummary: false, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: false,      // do not print information about skipped tests
            showSpecTiming: false,      // print the time elapsed for each spec
            failFast: false              // test would finish with error when a first fail occurs.
    },

    // optionally, configure the coverage reporter
    coverageReporter: {
      type : 'html',
      dir : testCoverage
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],  //'Chrome'


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
