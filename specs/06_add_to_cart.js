/* eslint-disable max-len */
let MainPage = require('../pages/mainPage');
let ItemPage = require('../pages/itemPage');
let CategoryPage = require('../pages/categoryPage');
let CartPage = require('../pages/cartPage');
let LoginPage = require('..//pages/loginPage');

describe('Search', () => {
    beforeAll(async () => {
        await MainPage.open();
        await MainPage.navigateToSignIn();
        await LoginPage.setCred('protractor.automation01@gmail.com', 'passw0rd', 'Correct email, correct password');
        await LoginPage.naviagateToLogin();
    });

    it('Search', async () => {
        // await MainPage.waitForPageAvailable();

        // step 1
        await MainPage.navigateCategory();
        expect(await CategoryPage.getCategoryNameElement().getText()).toEqual("Насос для фонтанов и прудов");

        // step 2
        await CategoryPage.clickBuyOnHotlineCheckBox();

        // step 3
        await CategoryPage.clickCartIcon();
        expect(await ItemPage.getItemName().getText()).toContain('Насос для бассейна SPRUT FCP550');

        // step 4
        await ItemPage.clickBuyNowButton();
        await CartPage.waitForPageAvailable();
        expect(await browser.getTitle()).toEqual("Корзина");

        // step 5
        await CartPage.waitForPageAvailable();
        await CartPage.setDeliveryType();

        // step 6
        await CartPage.setDepartmentOption();

        // step 7
        await CartPage.clickOrderButton();
        await browser.sleep(3000);
    });
});