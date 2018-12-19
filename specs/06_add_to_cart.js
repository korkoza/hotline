/* eslint-disable max-len */
let MainPage = require('../pages/mainPage');
let ItemPage = require('../pages/itemPage');
let CategoryPage = require('../pages/categoryPage');
let CartPage = require('../pages/cartPage');
let LoginPage = require('..//pages/loginPage');

describe('Add to cart', () => {
    beforeAll(async () => {
        await MainPage.open();
    });

    it('Add to cart', async () => {
        await MainPage.navigateToSignIn();
        await LoginPage.setCred('protractor.automation01@gmail.com', 'passw0rd', 'Correct email, correct password');
        await LoginPage.naviagateToLogin();

        // step 1
        await MainPage.waitForPageAvailable();
        await MainPage.navigateCategory();
        expect(await CategoryPage.getCategoryNameElement().getText()).toEqual("Насос для фонтанов и прудов");

        // step 2
        await CategoryPage.getBuyOnHotlineChkBox().click();
        expect(await CategoryPage.getVerifyChkboxElement().getAttribute("checked")).toBeTruthy();


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
        expect(await browser.getTitle()).toEqual("Hotline Checkout");
    });
});