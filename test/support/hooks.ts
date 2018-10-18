const { BeforeAll, After, AfterAll, Status } = require("cucumber");
// import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../../protractor-cucumber.conf";
import {ComputerDataProvider} from "../testData/computerDataProvider";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

BeforeAll({tags: "@Computer"}, () => {
    browser.computer = {
        create: ComputerDataProvider.getValidComputerData1(String(new Date().getTime())),
        update: ComputerDataProvider.getValidComputerData2(String(new Date().getTime()))
    };
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});