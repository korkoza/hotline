let BasePage = require("./basePage");
let BaseElement = require("../elements/baseElement");
let TextViewElement = require("../elements/text_view");
let ButtonElement = require('../elements/baseElement');

class ItemPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".btn-blue.m_b-sm")), "Item info");
    }

    getItemName() {
        return new TextViewElement(element(by.css("#page-product h1")), "First search item");
    }

    getBuyNowButton() {
        return new ButtonElement(element(by.css(".btn-blue.m_b-sm")), "Buy now button");
    }

    async clickBuyNowButton() {
        await allure.createStep("Click 'Buy Now' button", async () => {
            await this.getBuyNowButton().click();
        })();
    }
}

module.exports = new ItemPage();