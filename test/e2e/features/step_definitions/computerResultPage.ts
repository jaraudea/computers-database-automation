import { browser } from "protractor";
import {ComputerResultPageObject} from "../../pages/computerResult.po";

const {Given, When, Then } = require("cucumber");
const expect = require("chai").use(require("chai-as-promised")).expect;

const computerResultPage: ComputerResultPageObject = new ComputerResultPageObject();

Given(/^I go to computers result page$/, async () => {
    await computerResultPage.topBarPart.title.click();
    expect(await browser.getTitle()).equal("Computers database");
});

When(/^I click on add computer button$/, async () => {
   await computerResultPage.addComputerButton.click();
});

When(/^I search for previous (.*?)d computer$/, async (computerAction) => {
    const data = browser.computer[computerAction];
    await computerResultPage.filterField.clear();
    await computerResultPage.filterField.sendKeys(data.computerName);
    await computerResultPage.filterButton.click();
});

When(/^Click on first computer name on result table$/, async () => {
    await computerResultPage.clickFirstComputerNameOnResultTable();
});

Then(/^Validates that (.*?) computer success message is shown$/, async (computerAction) => {
    let message;
    if (computerAction === 'delete') {
        message = 'Done! Computer has been deleted';
    } else {
        message = `Done! Computer ${browser.computer[computerAction].computerName} has been ${computerAction}d`;
    }
    expect(message).equal((await computerResultPage.alertMessage.getText()).trim());
});

Then(/^The (.*?)d computer should be shown in result table$/, async (computerAction) => {
    const expectedData = browser.computer[computerAction];
    const data = await computerResultPage.geFirstRowFromResultTable();
    expect(expectedData).to.deep.eql(data);
});

Then(/^Validates no computers message on header$/, async () => {
    expect('No computers found').equal(await computerResultPage.totalComputersHeader.getText());
});