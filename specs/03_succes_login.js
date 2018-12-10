let LoginPage = require('../pages/loginPage');
let MainPage = require('../pages/mainPage');

describe('Login page', () => {
    beforeAll(async () => {
        await MainPage.open();
    });

    it('successful login', async () => {
        await MainPage.waitForPageAvailable();

        // step 1
        await MainPage.navigateToSignIn();

        // step 2
        await LoginPage.setCred('protractor.automation01@gmail.com', 'passw0rd', 'Correct email, correct password');

        // step 3
        await LoginPage.naviagateToLogin();
        await expect(MainPage.getUserName()).toEqual('protractor01');
    });
});