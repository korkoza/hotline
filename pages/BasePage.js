let BaseElement = require('../elements/baseElement');
let ButtonElement = require('../elements/button');
let TextViewElement = require('../elements/text_view');

class BasePage {
    constructor() {
        if (this.waitForPageAvailable === undefined) {
            throw new TypeError(this.constructor.name + "Must override method waitForPageAvailable()");
        }
    }

    // category elements
    getTreeElement(treeName) {
        return new BaseElement(element(by.xpath(`//a[.='${treeName}']`)), 'Tree element');
    }

    getSubTreeElement(subTreeName) {
        return new BaseElement(element(by
            .cssContainingText('span', subTreeName)), 'Subtree element');
    }

    getCategoryElement(categoryName) {
        return new BaseElement(element(by.xpath(`//a[.='${categoryName}']`)), 'Category element');
    }

    getCatalogMenu() {
        return new BaseElement(element(by.css(".menu-dropdown")), "Catalog menu");
    }

    async navigateCategory(treeName, subTreeName, categoryName) {
        await allure.createStep("Navigate to category", async () => {
            await this.getCatalogMenu().click();
            await this.getTreeElement(treeName).hover();
            await this.getSubTreeElement(subTreeName).waitForVisible();
            await this.getSubTreeElement(subTreeName).click();
            await this.getCategoryElement(categoryName).click();
        })();
    }

    // cart elements
    getCartIconElement() {
        return new BaseElement(element(by.css("div.item-cart > span")), "Cart icon element");
    }

    async navigateCartMenu() {
        await allure.createStep("Open cart menu", async () => {
            await this.getCartIconElement().click();
        })();
    }

    getCartMenuItem(numb) {
        return new BaseElement(element(by.css(`.row-indent:nth-child(${numb}) i`)), "Delete cart item icon");
    }

    async deleteCartMenuItem(numb) {
        await allure.createStep("Delete item from cart menu", async () => {
            await this.getCartMenuItem(numb).click();
        })();
    }

    getNavigateToCartPageButton() {
        return new ButtonElement(element(by.css("a[href='/cart/']")), "Go to Cart Page button");
    }

    async navigateToCartPage() {
        await allure.createStep("Navigate to Cart page", async () => {
            await this.getNavigateToCartPageButton().click();
        })();
    }

    getCartItemsCounter() {
        return new TextViewElement(element(by.css(".item-cart .count")), "Cart items counter element");
    }

    // Header Logo
    getHeaderLogo() {
        return new BaseElement(element(by.css("a[href='/']")), "Header Logo element");
    }

    async navigateToMainPage() {
        await allure.createStep("Navigate to Main page", async () => {
            await this.getHeaderLogo().click();
        })();
    }
}

module.exports = BasePage;