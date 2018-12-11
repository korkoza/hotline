/* eslint-disable max-len */
let LoginPage = require('../pages/loginPage');
let MainPage = require('../pages/mainPage');

describe('Login page', () => {
    beforeAll(async () => {
        await MainPage.open();
    });

    it('unsuccessful login', async () => {
        await MainPage.waitForPageAvailable();

        // step 1
        await MainPage.navigateToSignIn();
        expect(await LoginPage.getSignUpElement()).toBeTruthy();

        // step 2
        await LoginPage.setCred('', '', 'Empty email, empty password');
        await LoginPage.getLoginElement().click();
        await expect(LoginPage.getEmptyEmailErrorElement().getText()).toEqual('Поле логин не может быть пустым');

        // step 3
        await LoginPage.setCred('protractor.automation01@gmail.com', '', 'Correct email, empty password');
        await LoginPage.getLoginElement().click();
        await expect(LoginPage.getPassErrorElement().getText())
            .toEqual('Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить');

        // step 4
        await LoginPage.setCred('protractor.automation01@gmail.com', 'aaaaaa', 'Correct email, incorrect password');
        await LoginPage.getLoginElement().click();
        await expect(LoginPage.getPassErrorElement().getText())
            .toEqual('Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить');

        // step 5
        await LoginPage.setCred('protra_asdfaf@gmail.com', 'aaaaaa', 'incorrect email, incorrect password');
        await LoginPage.getLoginElement().click();
        await expect(LoginPage.getInvalidEmailErrorElement().getText())
            .toEqual('Извините, пользователь с указанным e-mail не зарегистрирован, пожалуйста, убедитесь в правильности написания адреса');
    });
});