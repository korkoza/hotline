let BasePage = require("./BasePage");


class MyAccountPage extends BasePage {
    getUserNameElement() {
        return element(by.css('.name.ellipsis'));
    }

    async getUserName() {
        return await this.getUserNameElement().getText();
    }
}

module.exports = new MyAccountPage();