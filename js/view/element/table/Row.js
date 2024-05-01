// Row.js
import { AElement } from '../../AElement.js';
import { Cell } from './Cell.js';

class Row extends AElement {
    constructor() {
        super('tr');
    }

    addCell(cell) {
        this.addChild(cell);
        return this;
    }

    execute(strategy, param) {
        return strategy.row(this, param);
    }
}

export { Row };