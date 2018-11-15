// conf.js

exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    
    // Proxy will be used for all Sauce Labs REST API calls
    // sauceProxy: 'http://<proxy>:<port>',

    // Proxy will be used for Selenium traffic (e.g. POST elements)
    // webDriverProxy: 'http://<proxy>:<port>',

    specs: ['specs/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Insert Job Name Here");
    }
}
