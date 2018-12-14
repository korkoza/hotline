/* eslint-disable max-len */
let MainPage = require('../pages/mainPage');
let SearchPage = require('../pages/searchPage');
let ItemPage = require('../pages/itemPage');

describe('Search', () => {
    beforeAll(async () => {
        await MainPage.open();
    });

    it('Search', async () => {
        await MainPage.waitForPageAvailable();

        // step 1
        await MainPage.search('Samsung Galaxy');
        await SearchPage.waitForPageAvailable();
        expect(await SearchPage.getSearchResult().getText()).toContain('По запросу «Samsung Galaxy» найден');

        // step 2
        await allure.createStep('Open first item', async () => {
            await SearchPage.getFirstItem().click();
        })();
        ItemPage.waitForPageAvailable();
        expect(await ItemPage.getItemName().getText()).toContain('Samsung Galaxy');
    });
});