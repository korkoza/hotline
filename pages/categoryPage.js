let BasePage = require("./basePage");
let BaseElement = require("../elements/baseElement");
let TextViewElement = require("../elements/text_view");
let CheckboxElement = require("../elements/checkboxElement");

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
}

module.exports = new CategoryPage();