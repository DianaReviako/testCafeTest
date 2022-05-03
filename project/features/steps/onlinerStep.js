const { Given, Then, When } = require('@cucumber/cucumber');
const onliner = require('../../forms/onliner/onliner');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Given('Onliner main page is open.',  async function() {
    await testController.navigateTo('https://www.onliner.by/');
    const status = await onliner.isFormOpened();
    await testController.expect(status).ok();
});

Then('Checkbox {string} checked.', async(name) => {
    const status = await onliner.isCheckboxSelected(name);
    await testController.expect(status).ok();
})

When('Select category {string}.', (categoryName) => {
    onliner.clickCategory(categoryName);
});

When('Click filter {string}.', async (checkboxName) => {
    await onliner.clickFilterChechbox(checkboxName);
    await sleep(10000)
});
