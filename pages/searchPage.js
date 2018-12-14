let BasePage = require("./basePage");
let BaseElement = require("../elements/baseElement");
let TextViewElement = require("../elements/text_view");

class SearchPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".products-list.cell-list")), "Result");
    }

    getSearchResult() {
        return new TextViewElement(element(by.css("#page-search h1")), "Search result");
    }

    getFirstItem() {
        return new TextViewElement(element(by
            .css(".product-item:nth-child(1) .h4")), "First search item");
    }
}

module.exports = new SearchPage();