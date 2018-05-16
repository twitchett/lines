// See http://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function(config) {
    var base = 'resources/test/test' //same as :output-dir

    config.set({
        frameworks: ['cljs-test'],

        basePath: '',

        logLevel: "DEBUG",

        files: [
            //  We serve all the JS files via Karma's webserver so that you can
            //  use :optimizations :none. Only test.js is "included" because
            //  CLJS does its own module loading.
            { pattern: base + '/*.js', included: false },
            { pattern: base + '/**/*.js', included: false },
            { pattern: 'resources/test/test.js', nocache: true } // same as :output-to
        ],

        client: {
            // This value is the test entrypoint.
            // In ordinary JS usage, this array is used to pass args the `karma.start` script,
            // but here it is eval'd by the karma-cljs-test adapter to start the tests.
            args: ['lines.karmarunner.run_all']
        },

        reporters: ['progress'],

        browsers: ['PhantomJS'],

        reportSlowerThan: 500, // ms

        // We disable autoWatch, because it executes tests while the code is
        // still compiling. We use :notify-command to trigger them instead.
        autoWatch: false,

        // singleRun: true,

        // Configuration for JUnit output. We care only about the output directory.
        // <https://github.com/karma-runner/karma-junit-reporter#configuration>
        // junitReporter: {
            // outputDir: 'reports'
        // }
    });
}