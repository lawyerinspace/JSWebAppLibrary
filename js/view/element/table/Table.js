// Table.js
import { AElement } from '../../AElement.js';
import { TableHeader } from './TableHeader.js';
import { TableBody } from './TableBody.js';
import { TableFooter } from './TableFooter.js';
import { Caption } from './Caption.js';

class Table extends AElement {
    constructor() {
        super('table');
        this.caption = new Caption();
        this.header = new TableHeader();
        this.body = new TableBody();
        this.footer = new TableFooter();
        this.addChild(this.caption).addChild(this.header).addChild(this.body).addChild(this.footer);
    }

    getCaption(){
        return this.caption;
    }

    getHeader() {
        return this.header;
    }

    getFooter() {
        return this.footer;
    }

    getBody(){
        return this.body;
    }

    addRow(row) {
        this.getBody().addRow(row);
        return this;
    }

    execute(strategy, param) {
        return strategy.table(this, param);
    }
}

export { Table };