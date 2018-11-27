let BasePage = require("./BasePage");
let ButtonElement = require("../elements/button");

class MainPage extends BasePage {
    getSignInElement() {
        return new ButtonElement(element(by.css('.item-login a')), "Sign in button");
    }

    getUserNameElement() {
        return element(by.css('.name.ellipsis'));
    }

    async getUserName() {
        return await this.getUserNameElement().getText();
    }
}


module.exports = new MainPage();