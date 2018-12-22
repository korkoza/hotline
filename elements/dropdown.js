let BaseElement = require("./baseElement");

let optionLocator = "option";


class DropdownElement extends BaseElement {
    async selectOption(optionText) {
        let innerOption = new BaseElement(this.getProtractorElement()
            .element(by.cssContainingText(optionLocator, optionText)), "Option by text");
        await this.getProtractorElement().click();
        await innerOption.click();
    }
}

module.exports = DropdownElement;