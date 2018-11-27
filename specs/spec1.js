let LoginPage = require('../pages/LoginPage');
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

        await allure.createStep('Click Create an account', async () => {
            await LoginPage.submit();
            await expect(MainPage.getUserName()).toEqual('protractor01');
        })();
    });
});