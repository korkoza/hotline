let BasePage = require("./BasePage");
let ButtonElement = require("../elements/button");
let InputElement = require("../elements/input");
let BaseElement = require("..//elements/BaseElement");

class LoginPage extends BasePage {
    /* getEmailCreateElement() {
        return new InputElement(element(by.id('email_create')));
    }
    */
    getEmailElement() {
        return new InputElement(element(by.css(".field[type='email']")));
    }

    getPassElement() {
        return new InputElement(element(by.css(".field[type='password']")));
    }

    getLoginElement() {
        return new ButtonElement(element(by.css("input[type='submit']")), "Create Login Button");
    }

    /*
    getCreateElement() {
        return new ButtonElement(element(by.id('SubmitCreate')), "Crete Account Button");
    }

    getErrorElement() {
        return element(by.css('#create_account_error li'));
    }
    */

    async setEmail(a) {
        await this.getEmailElement().sendKeys(a);
    }

    async setPasswd(password) {
        await this.getPassElement().sendKeys(password);
    }

    async submit() {
        await this.getLoginElement().click();
    }

    async submitCreate() {
        await this.getCreateElement().click();
    }

    async getErrorEmail() {
        return await this.getErrorElement().getText();
    }

    async setEmailCreate(a) {
        await this.getEmailCreateElement().sendKeys(a);
    }

    async getErrorChanged(){
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.textToBePresentInElement(this.getErrorElement(), 'An account'), 5000);
    }
}

module.exports = new LoginPage();
