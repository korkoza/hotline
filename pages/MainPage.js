let BasePage = require("./BasePage");
let ButtonElement = require("../elements/button");
let BaseElement = require("../elements/BaseElement");

class MainPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".header img")), "Main banner");
    }

    getSignInElement() {
        return new ButtonElement(element(by.css('.item-login a')), "Sign in button");
    }

    getUserNameElement() {
        return element(by.css('.name.ellipsis'));
    }

    async getUserName() {
        return await this.getUserNameElement().getText();
    }

    async navigateToSignIn() {
        await allure.createStep('Click Sign in', async () => {
            await this.getSignInElement().click();
        })();
    }
}


module.exports = new MainPage();