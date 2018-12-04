let EC = protractor.ExpectedConditions;

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

    async waitForVisible() {
        await browser.wait(EC.visibilityOf(this.getProtractorElement()), browser.params.explicitWait);
    }
}

module.exports = BaseElement;