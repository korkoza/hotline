let BasePage = require("./basePage");
let BaseElement = require("../elements/baseElement");
let TextViewElement = require("../elements/text_view");

class ItemPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".viewbox.product-resume")), "Item info");
    }

    getItemName() {
        return new TextViewElement(element(by.css("#page-product h1")), "First search item");
    }
}

module.exports = new ItemPage();