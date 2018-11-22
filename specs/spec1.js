let LoginPage = require('../pages/LoginPage');
let MyAccountPage = require('../pages/MyAccountPage');
let MainPage = require('../pages/MainPage');

describe('Login page', () => {
    beforeAll(async () => {
        await browser.restart();
        await browser.manage().setTimeouts({ implicit: 5000 });
        browser.waitForAngularEnabled(false);
        await browser.get('https://hotline.ua/');
    });

    it('successful login', async () => {
        await allure.createStep('Click Sign in', async () => {
            await MainPage.getSignInElement().click();
        })();

        await allure.createStep('Fill out Email and password', async () => {
            await LoginPage.setEmail('protractor.automation01@gmail.com');
            await LoginPage.setPasswd('passw0rd');
        })();

        await allure.createStep('3. Click Create an account', async () => {
            await LoginPage.submit();
            await expect(MyAccountPage.getUserName()).toEqual('protractor01');
        })();
    });
});