import { AbstractNode } from '../node/library.js';

export class AbstractRecord extends AbstractNode {
    constructor(id, type) {
        super(id, type);
        if (new.target === AbstractRecord) {
            throw new Error("Cannot construct AbstractRecord instances directly");
        }
    }
}