let BasePage = require("../pages/basePage");
let BaseElement = require("../elements/baseElement");
let DropdownElement = require("../elements/dropdown");

class CartPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".cart-info.text")), "Product's list");
    }

    // Delivery type dropdown elements

    getDeliveryTypeDropdown() {
        return new DropdownElement(element(by.css("div.viewbox:nth-child(2) .field.m_b-sm")), "Delivery dropdown");
    }

    async setDeliveryType(optionText) {
        await allure.createStep("Select delivery type", async () => {
            await this.getDeliveryTypeDropdown().selectOption(optionText);
        })();
    }

    // Department dropdown elements
    getDepartmentDropdown() {
        return new DropdownElement(element(by
            .css("div[data-delivery-type-options='warehouseNP']")), "Department dropdown");
    }

    async setDepartmentOption(optionText) {
        await allure.createStep("Set department", async () => {
            await this.getDepartmentDropdown().selectOption(optionText);
        })();
    }

    // Order button
    getOrderButton() {
        return new BaseElement(element(by.css(".btn-blue")), "Order button");
    }

    async clickOrderButton() {
        await allure.createStep("click Order button", async () => {
            await this.getOrderButton().click();
        })();
    }
}

module.exports = new CartPage();