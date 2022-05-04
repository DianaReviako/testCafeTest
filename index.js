var reporter = require('cucumber-html-reporter');

var options = {

        theme: 'bootstrap',
        jsonFile: 'report.json',
        output: 'cucumber_report.html',
        screenshotsDirectory: 'photo',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Title": "Sample Report",
            "Browser": "Chrome",
            "Platform": "Windows 10"
        }
    };

reporter.generate(options);