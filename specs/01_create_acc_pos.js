/* eslint-disable max-len */
let RegisterPage = require('../pages/registerPage');
let MainPage = require('../pages/mainPage');
let LoginPage = require('../pages/loginPage');

describe('Login page', () => {
    beforeAll(async () => {
        await browser.manage().setTimeouts({ implicit: browser.params.implicitWait });
        await browser.get('https://hotline.ua/');
    });

    it('create account positive', async () => {
        // step 1
        await MainPage.navigateToSignIn();
        expect(await LoginPage.getSignUpElement()).toBeTruthy();

        // step 2
        await LoginPage.navigateToSignUp();
        expect(await browser.getTitle()).toEqual('Регистрация нового пользователя');

        // step 3
        let rndEmail = `protractor.automation01+${Math.floor(Math.random() * 10000)}@gmail.com`;
        console.log(rndEmail);
        let rndNick = `protractor.automation01${Math.floor(Math.random() * 10000)}`;
        console.log(rndNick);
        await RegisterPage.createAccount(rndEmail, rndNick, 'passw0rd', 'Populate fields and click Sign up');
        expect(await RegisterPage.getVerificationElement().getText())
            .toContain("Для активации вашего аккаунта, пожалуйста, подтвердите e-mail, указанный вами при регистрации.");
    });
});