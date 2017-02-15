//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
  "libs/jquery/dist/jquery.min.js",
"libs/angular/angular.js",
"libs/angular-route/angular-route.js",
"libs/angular-mocks/angular-mocks.js",
"libs/angular-loader/angular-loader.js",
"libs/ng-file-upload/ng-file-upload-shim.min.js",
"libs/ng-file-upload/ng-file-upload.min.js",
"libs/typeahead.js/dist/typeahead.jquery.min.js",
"libs/typeahead.js/dist/typeahead.bundle.min.js",
"libs/typeahead.js/dist/bloodhound.min.js",
"libs/angular-typeahead/dist/angular-typeahead.min.js",
"libs/handlebars/handlebars.min.js",
"libs/angular-spinner/dist/angular-spinner.min.js",
"app.js",
"components/my-typeahead/typeahead-directive.js",
"services/api.js",
"form/form.js",
"libs/ng-notify/dist/ng-notify.min.js",
"**/*_test.js"
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
