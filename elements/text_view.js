let BaseElement = require("./BaseElement");

class TextViewElement extends BaseElement {
    async getText() {
        console.log(`Get text of "${this.name}" element`);
        return await this.protractorElement.getText();
    }
}

module.exports = TextViewElement;