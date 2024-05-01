// ATableContainer.js
import { AElement } from '../../AElement.js';

class ATableContainer extends AElement {
    constructor(tag) {
        super(tag);
    }

    addRow(row) {
        this.addChild(row);
        return this;
    }

    deleteRow(row) {
        this.removeChild(row);
        return this;
    }

    getRows(){
        return this.getChildren();
    }
}

export { ATableContainer };