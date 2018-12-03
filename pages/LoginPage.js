let BasePage = require("./BasePage");
let ButtonElement = require("../elements/button");
let InputElement = require("../elements/input");
let BaseElement = require("../elements/BaseElement");

class LoginPage extends BasePage {
    waitForPageAvailable() {
        return new BaseElement(element(by.css(".header-short img")), "Check whether page is available");
    }

    getEmailElement() {
        return new InputElement(element(by.css(".field[type='email']")), "Email login");
    }

    getPassElement() {
        return new InputElement(element(by.css(".field[type='password']")), "Password login");
    }

    getLoginElement() {
        return new ButtonElement(element(by.css("input[type='submit']")), "Login Button");
    }

    getSignUpElement() {
        return new BaseElement(element(by.css(".viewbox .text p a")), "Create SignUp eleement");
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

    async setCred(email, pass) {
        await allure.createStep('Fill out Email and password', async () => {
            await this.setEmail(email);
            await this.setPasswd(pass);
        })();
    }

    async naviagateToLogin() {
        await allure.createStep('Click Create an account', async () => {
            await this.submit();
        })();
    }

    async navigateToSignUp() {
        await allure.createStep('Click Sign Up', async () => {
            await this.getSignUpElement().click();
        })();
    }
}

module.exports = new LoginPage();
