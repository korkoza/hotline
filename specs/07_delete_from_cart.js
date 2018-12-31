/* eslint-disable max-len */
let MainPage = require('../pages/mainPage');
let CartPage = require('../pages/cartPage');

describe('Cart', () => {
    beforeAll(async () => {
        await MainPage.open();
    });

    it('Delete from cart', async () => {
        // add items to cart
        await MainPage.addRandomItemsToCart(3);

        await MainPage.open();

        // step 1
        await MainPage.getCartItemsCounter().waitForVisible();
        await MainPage.navigateCartMenu();
        expect(await MainPage.getCartItemsCounter().getText()).toEqual('3');

        // step 2
        await MainPage.deleteCartMenuItem(1);
        await MainPage.getCartItemsCounter().waitForVisible();
        await MainPage.getCartMenuItem(3).waitForInvisible();
        expect(await MainPage.getCartItemsCounter().getText()).toEqual('2');

        // step 3
        await MainPage.navigateToCartPage();
        await CartPage.waitForPageAvailable();
        expect(await CartPage.itemsCount()).toEqual(2);

        // step 4
        await CartPage.deleteFirstCartItem();
        await CartPage.getCartContentElementBusy().waitForInvisible();
        expect(await CartPage.itemsCount()).toEqual(1);

        // step 5
        await MainPage.navigateToMainPage();
        await MainPage.getCartItemsCounter().waitForVisible();
        expect(await MainPage.getCartItemsCounter().getText()).toEqual('1');
    });
});