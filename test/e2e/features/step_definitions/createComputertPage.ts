import {CreateComputerPageObject} from "../../pages/createComputer.po";
import {UIComponentHelper} from '../../helpers/uiComponentHelper';
import {browser} from "protractor";

const { When, Then } = require("cucumber");
const expect = require("chai").use(require("chai-as-promised")).expect;

const createComputerPage: CreateComputerPageObject = new  CreateComputerPageObject();

When(/^Set data to (.*?) computer$/, async (computerAction) => {
    const data = browser.computer[computerAction];
    if (data.computerName !== undefined) {
        await createComputerPage.computerNameField.clear();
        await createComputerPage.computerNameField.sendKeys(data.computerName);
    }
    if (data.introducedDate !== undefined) {
        await createComputerPage.introducedDateField.clear();
        await createComputerPage.introducedDateField.sendKeys(data.introducedDate);
    }
    if (data.discontinuedDate !== undefined) {
        await createComputerPage.discontinuedDateField.clear();
        await createComputerPage.discontinuedDateField.sendKeys(data.discontinuedDate);
    }
    if (data.company !== undefined) {
        await UIComponentHelper.selectOnfield(createComputerPage.companyField, data.company);
    }
});

When(/^Click on (.*?) this computer button$/, async (computerAction) => {
    switch (computerAction) {
        case 'create':
            await createComputerPage.createButton.click();
            break;
        case 'save':
            await createComputerPage.saveButton.click();
            break;
    }
});

When(/^Click on delete button$/, async () => {
    await createComputerPage.deleteButton.click();
});


Then(/^Validates that (.*?)d computer data is the same$/, async (computerAction) => {
    const data = browser.computer[computerAction];
    expect(data).to.deep.equal(await createComputerPage.getComputerDataFromFields());
});