/* it's unfinished class. I didn't manged how to check whether checkbox is selected because different
elements have to be used for selection and verification. */

let BaseElement = require("./baseElement");

class CheckboxElement extends BaseElement {
    async getAttribute() {
        console.log(`Verify on element "${this.name}"`);
        await this.protractorElement.getAttribute('checked');
    }

    async isChecked(attribute) {
        return await attribute.getAttribute();
    }
}

module.exports = CheckboxElement;