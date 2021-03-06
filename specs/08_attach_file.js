/* eslint-disable max-len */
let MainPage = require('../pages/mainPage');
let FeedbackPage = require('../pages/feedbackPage');


describe('Work with file system', () => {
    beforeAll(async () => {
        await MainPage.open();
    });

    it('Attach file', async () => {
        // step 1
        await MainPage.navigateToFeedbackPage();
        let allWindows = await browser.getAllWindowHandles();
        await browser.switchTo().window(allWindows[1]);
        expect(await FeedbackPage.getCaptionElement().getText()).toEqual("Обратная связь для пользователей");

        // step 2
        await FeedbackPage.attachFile(1, 'C:/projects/hotline/test_data/image.jpg');
        expect(await FeedbackPage.getChooseFileButton(2)).toBeTruthy();

        await FeedbackPage.attachFile(2, 'C:/projects/hotline/test_data/logo-v2.svg');
        expect(await FeedbackPage.getFileTypeErrorElement(2).isDisplayed()).toBe(true);
    });
});