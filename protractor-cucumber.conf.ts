// import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "./test/support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    baseUrl: "http://computer-database.herokuapp.com/computers",

    capabilities: {
        browserName: "chrome",
        name : "Sample Application",
        chromeOptions: {
            args: ["--disable-web-security", "--user-data-dir=~/.e2e-chrome-profile", "--no-sandbox" ]
        },
        "chrome.binary.path": "google-chrome-stable"
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../test/e2e/features/*.feature",
    ],

    directConnect: true,

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../typeScript/test/e2e/features/step_definitions/*.js", "../typeScript/test/support/*.js"],
        strict: true,
        tags: "@Computer",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};