import { $, ElementFinder} from "protractor";

export class TopBarPartObject {
    public title: ElementFinder;

    constructor() {
        this.title = $('.topbar a');
    }
}