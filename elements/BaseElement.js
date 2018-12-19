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

    async getAttribute(attribute) {
        console.log(`Get attribute "${attribute}" of "${this.name}"`);
        return await this.protractorElement.getAttribute(attribute);
    }

    async waitForVisible() {
        await browser.wait(EC.visibilityOf(this.getProtractorElement()), browser.params.explicitWait);
    }

    async elementToBeSelected() {
        await browser.wait(EC.elementToBeSelected(this.getProtractorElement()), browser.params.explicitWait);
    }

    async hover() {
        await browser.actions().mouseMove(this.getProtractorElement()).perform();
    }
}

module.exports = BaseElement;