let BaseElement = require('../elements/baseElement');
let BasePage = require('./basePage');
let TextViewElement = require('../elements/text_view');
let InputElement = require('../elements/input');


class FeedbackPage extends BasePage {
    async waitForPageAvailable() {
        await this.getPageBaseElement().waitForVisible();
    }

    getPageBaseElement() {
        return new BaseElement(element(by.css(".rc-anchor")), "Captcha element");
    }

    getCaptionElement() {
        return new TextViewElement(element(by.css(".content h1")), "Feedback page caption");
    }

    getChooseFileButton(number) {
        return new InputElement(element(by.css(`.cell-7 div:nth-child(${number}) input[type=file]`)), `${number} Choose file button`);
    }

    async attachFile(number, path) {
        await allure.createStep(`Attach ${number} file`, async () => {
            await this.getChooseFileButton(number).sendKeys(path);
        })();
    }

    getFileTypeErrorElement(number) {
        return new TextViewElement(element(by
            .css(`.cell-7  div:nth-child(${number})  div:nth-child(4)  div`)), "'not supported format' error for file");
    }
}

module.exports = new FeedbackPage();