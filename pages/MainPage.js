let BasePage = require("./basePage");
let ButtonElement = require("../elements/button");
let BaseElement = require("../elements/baseElement");
let InputElement = require("../elements/input");
let TextViewElement = require("../elements/text_view");

class MainPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by
            .css(".thumbnails.owl-loaded.owl-drag > div.owl-stage-outer > div")), "Main banner");
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

    getTreeElement() {
        return new BaseElement(element(by.css('a[href="/dacha_sad/"]')), 'Tree element');
    }

    getSubTreeElement() {
        return new BaseElement(element(by
            .css('li[data-menu-id="2952"]')), 'Subtree element');
    }

    getCategoryElement() {
        return new BaseElement(element(by
            .css('a[href*="/dacha_sad/nasosy-vodosnabzheniya/46036/"]')), 'Category element');
    }

    async navigateCategory() {
        await allure.createStep("Navigate to category", async () => {
            await this.getTreeElement().hover();
            await this.getSubTreeElement().waitForVisible();
            await this.getSubTreeElement().click();
            await this.getCategoryElement().click();
        })();
    }
}

module.exports = new MainPage();