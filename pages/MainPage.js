let BasePage = require("./BasePage");
let ButtonElement = require("../elements/button");

class MainPage extends BasePage {
    getSignInElement() {
        return new ButtonElement(element(by.css('.item-login a')));
    }
}


module.exports = new MainPage();