/* eslint-disable max-len */
let BasePage = require("./BasePage");
let ButtonElement = require("../elements/button");
let InputElement = require("../elements/input");
let TextViewElement = require("../elements/text_view");
let BaseElement = require("../elements/BaseElement");

class RegisterPage extends BasePage {
    waitForPageAvailable() {
        return new BaseElement(element(by.css(".header-short img")), "Check whether page is available");
    }

    getEmailRegElement() {
        return new InputElement(element(by.css(".field[type='email']")), "Email input register");
    }

    getNickRegElement() {
        return new InputElement(element(by.css(".field[type='text']")), "Nick name input register");
    }

    getPasswordRegElement() {
        return new InputElement(element(by.css(".field[type='password']")), "Password input register");
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

    getSubmitReg() {
        return new ButtonElement(element(by.id("submit-button")), "Create Submit registration button");
    }

    async setEmailReg(key) {
        await this.getEmailRegElement().sendKeys(key);
    }

    async setNickReg(key) {
        await this.getNickRegElement().sendKeys(key);
    }

    async setPasswordReg(key) {
        await this.getPasswordRegElement().sendKeys(key);
    }

    async setCredCreate(email, nick, pass, stepName) {
        await allure.createStep(stepName, async () => {
            await this.setEmailReg(email);
            await this.setNickReg(nick);
            await this.setPasswordReg(pass);
            await this.getSubmitReg().click();
        })();
    }
}

module.exports = new RegisterPage();