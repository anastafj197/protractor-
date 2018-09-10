// Frank Anastasia
// Customized config file with pretty output 

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  onPrepare: function() {
    var jasmineReporters = require( 'jasmine-reporters' );
    jasmine.getEnv().addReporter( new jasmineReporters.JUnitXmlReporter( {
      consolidateAll: true,
      savePath:       'testresults',
      filePrefix:     'xmloutput'
    } ) );

    var SpecReporter = require( 'jasmine-spec-reporter' ).SpecReporter;
    // add jasmine spec reporter
    jasmine.getEnv().addReporter( new SpecReporter( {
      displayStacktrace:      true,
      displayFailuresSummary: true,
      displayPendingSummary:  true,
      displaySuccessfulSpec:  true,
      displayFailedSpec:      true,
      displayPendingSpec:     true,
      displaySpecDuration:    false,
      displaySuiteNumber:     false,
      colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
      },
      customProcessors: []
    } ) );
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['zoo_spec_2.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};

