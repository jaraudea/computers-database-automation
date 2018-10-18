import { by } from 'protractor';

export class UIComponentHelper {

    static async selectOnfield(selectField, text) {
        await selectField.click();
        await selectField.element(by.xpath(`//select[@id="company"]//option[contains(., "${text}")]`)).click();
    }

    static async getTextFromResultTableColumn(resultTableColumnElement) {
        let text = (await resultTableColumnElement.getText()).trim();
        if (text === '-') {
            text = '';
        }
        return text;
    }

    static async getDateFromResultTableColumn(resultTableDateColumnElement) {
        let text = (await resultTableDateColumnElement.getText()).trim();
        if (text === '-') {
            text = '';
        } else {
            const date = new Date(text);
            text = date.toISOString().substr(0, 10);
        }
        return text;
    }
}