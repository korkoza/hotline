let BaseElement = require("./BaseElement");


class InputElement extends BaseElement {
    async sendKeys(text) {
        console.log(`Send text "${text}" to element "${this.name}"`);
        await this.protractorElement.sendKeys(text);
    }

    async clear() {
        console.log(`Clear "${this.name}" element`);
        await this.protractorElement.clear();
    }
}

module.exports = InputElement;