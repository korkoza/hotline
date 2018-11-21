let LoginPage = require('../pages/LoginPage');
let MainPage = require('../pages/MainPage');
let EC = protractor.ExpectedConditions;


describe('Login page', function() {
    beforeAll(async function() {
        await browser.restart();
        await browser.manage().setTimeouts({implicit: 5000});
        browser.waitForAngularEnabled(false);
        await  browser.get('http://automationpractice.com/index.php');
    });

    it('create account negative', async function() {
        await allure.createStep('1. Click Sign in', async function() {
            await MainPage.signInClick();
        })();
        
        await allure.createStep('2. Submit creation of account with empty fields', async function() {
            await LoginPage.submitCreate();            
            expect(await LoginPage.getErrorEmail()).toEqual('Invalid email address.');
        })();

        await allure.createStep('3. Set incorrect Email, and submit creation', async function() {
            await LoginPage.setEmailCreate('abc@abccom');
            await LoginPage.submitCreate();
            expect(await LoginPage.getErrorEmail()).toEqual('Invalid email address.');
        })();

        await allure.createStep('4. Set already used email and submit ', async function() {
            await LoginPage.getEmailCreateElement().clear();
            await LoginPage.setEmailCreate('mykola0@gmail.com');
            await LoginPage.submitCreate();
            // await LoginPage.getErrorChanged();
            expect(await LoginPage.getErrorEmail()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');
        })();            
    });
});