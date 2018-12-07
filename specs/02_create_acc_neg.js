/* eslint-disable max-len */
let RegisterPage = require('../pages/registerPage');
let MainPage = require('../pages/mainPage');
let LoginPage = require('../pages/loginPage');

describe('Login page', () => {
    beforeAll(async () => {
        await browser.manage().setTimeouts({ implicit: browser.params.implicitWait });
        await MainPage.open();
    });

    it('create account negative', async () => {
        await MainPage.waitForPageAvailable();

        // step 1
        await MainPage.navigateToSignIn();

        // step 2
        await LoginPage.navigateToSignUp();

        // step 3
        await RegisterPage.createAccount('', '', '', 'Verify all empty fields');
        expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Заполните это поле');

        // step 4
        await RegisterPage.createAccount('asfaf', '', '', 'Use incorrect Email');
        expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Поле не соответствует формату');

        // step 5
        await RegisterPage.getEmailElement().clear();
        await RegisterPage.createAccount('protractor.automation01@gmail.com', '', '', 'Set already used email and submit');
        expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Извините, но такой e-mail уже занят');

        // step 6
        await RegisterPage.getEmailElement().clear();
        await RegisterPage.createAccount('protractor.automation02@gmail.com', 'protractor.automation02', '1', 'Use weak password');
        expect(await RegisterPage.getPasswordErrorElement().getText()).toEqual('Длина поля не может быть меньше 4 и больше 16 символов');
    });
});