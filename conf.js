// conf.js

async function createScreenShotAllure() {
    let screenshotFile = await browser.takeScreenshot();
    await allure.createAttachment("Screenshot", () => {
        return new Buffer(screenshotFile, "base64")
    }, 'image/png')();
}

exports.config = {
    SELENIUM_PROMISE_MANAGER: 0,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/spec*.js'],
    capabilities: {
        shardTestFiles: true,
        browserName: 'chrome',
        maxInstances: 1,
        chromeOptions: {
            args: ["--window-size=1280,780"]
        }
    },
    onPrepare: async function() {
        let AllureReporter = require('jasmine-allure-reporter');

        jasmine.getEnv().addReporter(new AllureReporter({
            resultDir: 'allure-results'
        }));
        
        jasmine.getEnv().afterEach(async () => {
            await createScreenShotAllure();         
        });        
    }
}