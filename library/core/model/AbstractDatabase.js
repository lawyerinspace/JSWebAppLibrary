import { AbstractNode } from '../node/library.js';

export class AbstractDatabase extends AbstractNode {
    constructor(id, type) {
        super(id, type);
        if (new.target === AbstractDatabase) {
            throw new Error("Cannot construct AbstractDatabase instances directly");
        }
        this._children.tables = {};
    }

    addTable(table) {
        this.addChild('tables', table);
        return this;
    }

    getTables(){
        return this.getChildrenByType('tables');
    }

    getTableById(id) {
        return this.getChildById('tables', id);
    }

    removeTable(table) {
        this.removeChild('tables', table);
        return this;
    }

    createTable(){
        throw new Error("Abstract method createTable must be instantiated in the implementing class.");
    }
}

