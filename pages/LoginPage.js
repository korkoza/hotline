let BasePage = require("./BasePage");
let ButtonElement = require("../elements/button");
let InputElement = require("../elements/input");

class LoginPage extends BasePage {
    getEmailElement() {
        return new InputElement(element(by.css(".field[type='email']")), "Email login");
    }

    getPassElement() {
        return new InputElement(element(by.css(".field[type='password']")), "Password login");
    }

    getLoginElement() {
        return new ButtonElement(element(by.css("input[type='submit']")), "Login Button");
    }

    async setEmail(a) {
        await this.getEmailElement().sendKeys(a);
    }

    async setPasswd(password) {
        await this.getPassElement().sendKeys(password);
    }

    async submit() {
        await this.getLoginElement().click();
    }

    async setEmailCreate(a) {
        await this.getEmailCreateElement().sendKeys(a);
    }
}

module.exports = new LoginPage();
