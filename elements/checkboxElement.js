let BaseElement = require("./baseElement");
let InputElement = require("./input");

let chkboxInputLocator = 'input[type="checkbox"]';


class CheckboxElement extends BaseElement {
    async isChecked() {
        let innerChkbox = new InputElement(this.getProtractorElement()
            .element(by.css(chkboxInputLocator)), "Inner checkbox input");
        if (await innerChkbox.getAttribute('checked')) {
            return true;
        }
        return false;
    }

    async selectCheckbox() {
        if (await this.isChecked() !== true) {
            await this.protractorElement.click();
        }
    }

    async unSelectCheckbox() {
        if (await this.isChecked() === true) {
            await this.protractorElement.click();
        }
    }
}

module.exports = CheckboxElement;