let BaseElement = require("./baseElement");

let optionLocator = "option";


class DropdownElement extends BaseElement {
    async selectOption(optionText) {
        await this.getProtractorElement().click();
        let innerOption = new BaseElement(this.getProtractorElement()
            .element(by.cssContainingText(optionLocator, optionText)), "Option by text");
        await innerOption.click();
    }
}

module.exports = DropdownElement;