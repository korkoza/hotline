let BasePage = require("./basePage");
let ButtonElement = require("../elements/button");
let BaseElement = require("../elements/baseElement");
let InputElement = require("../elements/input");
let TextViewElement = require("../elements/text_view");
let ItemPage = require('../pages/itemPage');
let CategoryPage = require('../pages/categoryPage');
let CartPage = require('../pages/cartPage');

class MainPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by
            .css(".thumbnails > .owl-stage-outer")), "Main banner");
    }

    getSignInElement() {
        return new ButtonElement(element(by.css('.item-login a')), "Sign in button");
    }

    getUserNameElement() {
        return new TextViewElement(element(by.css('.name.ellipsis')), "User name");
    }

    getSearchElement() {
        return new InputElement(element(by.id("searchbox")), "Search element");
    }

    getDoSearchElement() {
        return new ButtonElement(element(by.id("doSearch")), "Do search button");
    }

    async getUserName() {
        return await this.getUserNameElement().getText();
    }

    async navigateToSignIn() {
        await allure.createStep('Click Sign in', async () => {
            await this.getSignInElement().click();
        })();
    }

    async open() {
        await browser.get('https://hotline.ua/');
    }

    async search(a) {
        await allure.createStep(`Search ${a}`, async () => {
            await this.getSearchElement().sendKeys(a);
            await this.getDoSearchElement().click();
        })();
    }


    async navigateCategory(treeName, subTreeName, categoryName) {
        await allure.createStep("Navigate to category", async () => {
            await this.getTreeElement(treeName).hover();
            await this.getSubTreeElement(subTreeName).waitForVisible();
            await this.getSubTreeElement(subTreeName).click();
            await this.getCategoryElement(categoryName).click();
        })();
    }

    async addRandomItemsToCart(itemCount) {
        for (let i = 1; i <= itemCount; i++) {
            await browser.get('https://hotline.ua/dacha_sad/nasosy-vodosnabzheniya/46036/?checkout=1');
            await CategoryPage.waitForPageAvailable();
            await CategoryPage.clickCartIcon(i);
            await ItemPage.waitForPageAvailable();
            await ItemPage.clickBuyNowButton();
            await CartPage.waitForPageAvailable();
        }
    }
}

module.exports = new MainPage();