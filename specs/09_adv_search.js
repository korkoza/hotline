let CategoryPage = require('../pages/categoryPage');


describe('Search', () => {
    beforeAll(async () => {
        await browser.get('https://hotline.ua/tourism/snaryazhenie-dlya-alpinizma/');
    });

    it('Advanced search', async () => {
        // step 1
        await CategoryPage.selectFilterByType('Шлямбурное оборудование');
        await CategoryPage.getListOfItemsElementBusy().waitForInvisible();
        expect(await CategoryPage.getFilterByName('Climbing Technology').isEnabled()).toBe(true);
        expect(await CategoryPage.getFilterByName('Deuter').isEnabled()).toBe(false);

        // step 2
        await CategoryPage.setPriceLimits(1200, 2000);
        await CategoryPage.getListOfItemsElementBusy().waitForInvisible();
        expect(await CategoryPage.getItem("Petzl Rocpec P26").isDisplayed()).toBe(true);
    });
});