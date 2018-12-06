/* eslint-disable max-len */
let BasePage = require("./basePage");
let ButtonElement = require("../elements/button");
let InputElement = require("../elements/input");
let TextViewElement = require("../elements/text_view");
let BaseElement = require("../elements/baseElement");

class RegisterPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".header-short img")), "Logo");
    }

    getEmailElement() {
        return new InputElement(element(by.css(".field[type='email']")), "Email input register");
    }

    getNickElement() {
        return new InputElement(element(by.css(".field[type='text']")), "Nick name input register");
    }

    getPasswordElement() {
        return new InputElement(element(by.css(".field[name='password']")), "Password input register");
    }

    getEmailErrorElement() {
        return new TextViewElement(element(by.css(".field.error[type='email'] + div div")), "Email Error");
    }

    getNickErrorElement() {
        return new TextViewElement(element(by.css(".field.error[type='text'] + div div")), "Nick Name Error");
    }

    getPasswordErrorElement() {
        return new TextViewElement(element(by.css(".field.error[type='password'] + div div")), "Password Error");
    }

    getSubmit() {
        return new ButtonElement(element(by.id("submit-button")), "Submit registration button");
    }

    getVerificationElement() {
        return new TextViewElement(element(by.css(".text.cell-8")), "Verification element");
    }

    async setEmail(key) {
        await this.getEmailElement().sendKeys(key);
    }

    async setNick(key) {
        await this.getNickElement().sendKeys(key);
    }

    async setPassword(key) {
        await this.getPasswordElement().sendKeys(key);
    }

    async createAccount(email, nick, pass, stepName) {
        await allure.createStep(stepName, async () => {
            await this.setEmail(email);
            await this.setNick(nick);
            await this.setPassword(pass);
            await this.getSubmit().click();
        })();
    }
}


module.exports = new RegisterPage();