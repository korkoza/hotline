class BaseElement {
    constructor(protractorElement, elementName) {
        this.protractorElement = protractorElement;
        this.name = elementName;
    }

    getProtractorElement() {
        return this.protractorElement;
    }

    async click() {
        console.log(`Click on element "${this.name}"`);
        await this.protractorElement.click();
    }
}

module.exports = BaseElement;