/* eslint-disable max-len */
let RegisterPage = require('../pages/RegisterPage');
let MainPage = require('../pages/MainPage');

let EC = protractor.ExpectedConditions; // ???


describe('Login page', () => {
    beforeAll(async () => {
        await browser.restart();
        await browser.manage().setTimeouts({ implicit: 5000 });
        browser.waitForAngularEnabled(false);
        await browser.get('https://hotline.ua/');
    });

    it('create account negative', async () => {
        await allure.createStep('Click Sign in', async () => {
            await MainPage.getSignInElement().click();
        })();

        await allure.createStep('Click Sign Up', async () => {
            await RegisterPage.getSignUpElement().click();
        })();

        await allure.createStep('Verify all empty fields', async () => {
            await RegisterPage.getSubmitReg().click();
            expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Заполните это поле');
        })();

        await allure.createStep('Set incorrect Email, and submit creation', async () => {
            await RegisterPage.setEmailReg('abc@abccom');
            await RegisterPage.getSubmitReg().click();
            expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Поле не соответствует формату');
        })();

        await allure.createStep('Set already used email and submit ', async () => {
            await RegisterPage.getEmailRegElement().clear();
            await RegisterPage.setEmailReg('protractor.automation01@gmail.com');
            await RegisterPage.getSubmitReg().click();

            // await browser.wait(EC.textToBePresentInElement(RegisterPage.getEmailErrorElement().protractorElement, 'Извините'), 5000);

            expect(await RegisterPage.getEmailErrorElement().getText()).toEqual('Извините, но такой e-mail уже занят');
        })();

        await allure.createStep('Use weak password', async () => {
            await RegisterPage.getEmailRegElement().clear();
            await RegisterPage.setEmailReg('protractor.automation02@gmail.com');
            await RegisterPage.setNickReg('protractor.automation02');
            await RegisterPage.setPasswordReg('1');
            await RegisterPage.getSubmitReg().click();
            // await RegisterPage.getErrorChanged();
            expect(await RegisterPage.getPasswordErrorElement().getText()).toEqual('Длина поля не может быть меньше 4 и больше 16 символов');
        })();
    });
});