import { AbstractNode } from '../node/library.js';

export class AbstractTable extends AbstractNode {
    constructor(id, type) {
        super(id, type);
        if (new.target === AbstractTable) {
            throw new Error("Cannot construct AbstractTable instances directly");
        }
        this._children.records = {};
    }

    addRecord(record) {
        this.addChild('record', record);
        return this;
    }

    getRecords(){
        return this.getChildrenByType('records');
    }

    getRecordById(id) {
        return this.getChildById('records', id);
    }

    removeRecord(record) {
        this.removeChild('records', record);
        return this;
    }

    createRecord(){
        throw new Error("Abstract method createRecord must be instantiated in the implementing class.");
    }
}

