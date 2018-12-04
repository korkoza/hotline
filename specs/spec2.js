/* eslint-disable max-len */
let RegisterPage = require('../pages/RegisterPage');
let MainPage = require('../pages/MainPage');
let LoginPage = require('../pages/LoginPage');

describe('Login page', () => {
    beforeAll(async () => {
        await browser.restart();
        await browser.manage().setTimeouts({ implicit: browser.params.implicitWait });
        browser.waitForAngularEnabled(false);
        await browser.get('https://hotline.ua/');
    });

    it('create account negative', async () => {
        // step 1
        await MainPage.navigateToSignIn();

        // step 2
        await LoginPage.navigateToSignUp();

        // step 3
        await RegisterPage.fillCreateAccount('', '', '', 'Verify all empty fields');
        expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Заполните это поле');

        // step 4
        await RegisterPage.fillCreateAccount('asfaf', '', '', 'Use incorrect Email');
        expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Поле не соответствует формату');

        // step 5
        await RegisterPage.getEmailRegElement().clear();
        await RegisterPage.fillCreateAccount('protractor.automation01@gmail.com', '', '', 'Set already used email and submit');
        expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Извините, но такой e-mail уже занят');

        // step 6
        await RegisterPage.getEmailRegElement().clear();
        await RegisterPage.fillCreateAccount('protractor.automation02@gmail.com', 'protractor.automation02', '1', 'Use weak password');
        expect(await RegisterPage.getPasswordErrorElement().getText()).toEqual('Длина поля не может быть меньше 4 и больше 16 символов');
    });
});