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
        // step 1
        await MainPage.navigateToSignIn();

        // step 2
        await LoginPage.setCred('protractor.automation01@gmail.com', 'passw0rd');

        // step 3
        await LoginPage.naviagateToLogin();
        await expect(MainPage.getUserName()).toEqual('protractor01');
    });
});