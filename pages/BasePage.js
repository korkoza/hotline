class BasePage {
    constructor() {
        if (this.waitForPageAvailable === undefined) {
            throw new TypeError(this.constructor.name + "Must override method waitForPageAvailable()");
        }
    }
}

module.exports = BasePage;