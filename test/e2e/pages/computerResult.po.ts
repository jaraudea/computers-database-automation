import { $, ElementFinder, by} from "protractor";
import {TopBarPartObject} from "./topBar.pto";
import {UIComponentHelper} from "../helpers/uiComponentHelper";

export class ComputerResultPageObject {
    public topBarPart: TopBarPartObject;
    public alertMessage: ElementFinder;
    public totalComputersHeader: ElementFinder;
    public filterField: ElementFinder;
    public filterButton: ElementFinder;
    public addComputerButton: ElementFinder;
    public computerResultTable: ElementFinder;
    public previousButton: ElementFinder;
    public currentPageLabel: ElementFinder;
    public nextButton: ElementFinder;

    constructor() {
        this.topBarPart = new TopBarPartObject();
        this.alertMessage = $('.alert-message');
        this.totalComputersHeader = $('#main h1');
        this.filterField = $('#searchbox');
        this.filterButton = $('#searchsubmit');
        this.addComputerButton = $('#add');
        this.computerResultTable = $('table.computers');
        this.previousButton = $('#pagination .prev a');
        this.currentPageLabel = $('#pagination .current a');
        this.nextButton = $('#pagination .next a');
    }

    async clickFirstComputerNameOnResultTable() {
        await this.computerResultTable.element(by.xpath('.//tbody//tr[1]//td[1]//a')).click();
    }

    async geFirstRowFromResultTable() {
        const firstComputer = await this.computerResultTable.all(by.css('tbody tr')).first();
        return {
            computerName: await UIComponentHelper.getTextFromResultTableColumn(firstComputer.element(by.xpath('.//td[1]'))),
            introducedDate: await UIComponentHelper.getDateFromResultTableColumn(firstComputer.element(by.xpath('.//td[2]'))),
            discontinuedDate: await UIComponentHelper.getDateFromResultTableColumn(firstComputer.element(by.xpath('.//td[3]'))),
            company: await UIComponentHelper.getTextFromResultTableColumn(firstComputer.element(by.xpath('.//td[4]')))
        }
    }
}