let BasePage = require("./basePage");
let BaseElement = require("../elements/baseElement");
let TextViewElement = require("../elements/text_view");
let CheckboxElement = require("../elements/checkboxElement");
let InputElement = require("../elements/input");
let ButtonElement = require("../elements/button");

class CategoryPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".products-list")), "Product's list");
    }

    getCategoryNameElement() {
        return new TextViewElement(element(by.css(".cell-12 .heading")), "Name of category");
    }

    getItem(name) {
        return new BaseElement(element(by.cssContainingText('a', `${name}`)), `${name} item`);
    }

    // Buy on Hotline Checkbox

    getBuyOnHotlineChkBox() {
        return new CheckboxElement(element(by.css("label[for=checkout-checkbox-mobile]")), "Checkbox Buy on Hotline");
    }

    // Cart Icon

    getCartIcon(number) {
        return new BaseElement(element(by.css(`.product-item:nth-child(${number}) .tooltip>a`)), "Cart icon");
    }

    async clickCartIcon(number) {
        await allure.createStep("Click on product's Cart icon", async () => {
            await this.getCartIcon(number).click();
        })();
    }

    // Filter items

    getFilterByType(type) {
        return new CheckboxElement(element(by.css(`a[data-eventlabel*="${type}"]`)), `"${type}" filter Checkbox`);
    }

    getFilterByName(name) {
        return new BaseElement(element(by.css(`.hidden input[data-eventlabel*='${name}']`)), `"${name}" filter Checkbox`);
    }

    getListOfItemsElementBusy() {
        return new BaseElement(element(by.css(".cell-12.busy[data-catalog-view]")), "List of items element");
    }

    getMinPriceElement() {
        return new InputElement(element(by.css(".field[data-price-min]")), "Minimum Price input field");
    }

    getMaxPriceElement() {
        return new InputElement(element(by.css(".field[data-price-max]")), "Maximum Price input field");
    }

    getSubmitPriceButton() {
        return new ButtonElement(element(by.css("input[value=OK]")), "Submit Price limits button");
    }

    async setPriceLimits(min, max) {
        await this.getMinPriceElement().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.getMinPriceElement().sendKeys(min);
        await this.getMaxPriceElement().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.getMaxPriceElement().sendKeys(max);
        await this.getSubmitPriceButton().click();
    }

    async selectFilterByType(type) {
        await this.getFilterByType(type).click();
    }
}

module.exports = new CategoryPage();