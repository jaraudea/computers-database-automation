import {$, by, ElementFinder} from "protractor";
import {TopBarPartObject} from "./topBar.pto";

export class CreateComputerPageObject {
    public topBarPart: TopBarPartObject;
    public headerTitle: ElementFinder;
    public computerNameField: ElementFinder;
    public introducedDateField: ElementFinder;
    public discontinuedDateField: ElementFinder;
    public companyField: ElementFinder;
    public createButton: ElementFinder;
    public deleteButton: ElementFinder;
    public saveButton: ElementFinder;
    public cancelButton: ElementFinder;

    constructor() {
        this.topBarPart = new TopBarPartObject();
        this.headerTitle = $('#main h1');
        this.computerNameField = $("#name");
        this.introducedDateField = $('#introduced');
        this.discontinuedDateField = $('#discontinued');
        this.companyField = $('#company');
        this.createButton = $('input[value="Create this computer"]');
        this.deleteButton = $('input[value="Delete this computer"]');
        this.saveButton = $('input[value="Save this computer"]');
        this.cancelButton = $('input[value="Cancel"]');
    }

    async getSelectedCompanyOption() {
        return await this.companyField.element(by.css('option[selected]')).getText()
    }

    async getComputerDataFromFields() {
        return {
            computerName: await this.computerNameField.getAttribute('value'),
            introducedDate: await this.introducedDateField.getAttribute('value'),
            discontinuedDate: await this.discontinuedDateField.getAttribute('value'),
            company: await this.getSelectedCompanyOption()
        }
    }
}