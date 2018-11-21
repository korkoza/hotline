let BaseElement = require("./BaseElement");


class InputElement extends BaseElement {
    async sendKeys(text) {
        console.log(`Send text "${text}" to element "${this.name}"`);
        await this.protractorElement.sendKeys(text);
    }
}

module.exports = InputElement;