let BasePage = require("../pages/basePage");
let BaseElement = require("../elements/baseElement");

class CartPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css("div:nth-child(3) > div.viewbox.viewbox-striped")), "Product's list");
    }

    // Delivery type dropdown elements

    getDeliveryTypeDropdown() {
        return new BaseElement(element(by.css("div.viewbox:nth-child(2) .field.m_b-sm")), "Delivery dropdown");
    }

    getDeliveryTypeOption() {
        return new BaseElement(element(by.css("option[data-delivery-id='42414']")), "Delivery type #1");
    }

    async setDeliveryType() {
        await allure.createStep("Select delivery type", async () => {
            await this.getDeliveryTypeDropdown().click();
            await this.getDeliveryTypeOption().click();
        })();
    }

    // Department dropdown elements
    getDepartmentDropdown() {
        return new BaseElement(element(by.css("div[data-delivery-type-options='warehouseNP']")), "Department dropdown");
    }

    getDepartmentOption() {
        return new BaseElement(element(by
            .css("div[data-delivery-type-options='warehouseNP'] option:nth-child(2)")), "Department option");
    }

    async setDepartmentOption() {
        await allure.createStep("Set department", async () => {
            await this.getDepartmentDropdown().click();
            await this.getDepartmentOption().click();
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