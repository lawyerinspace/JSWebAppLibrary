// TableCell.js
import { AElement } from '../../AElement.js';

class Cell extends AElement {
    constructor() {
        super('td');
    }

    execute(strategy, param) {
        return strategy.cell(this, param);
    }
}

export { Cell };