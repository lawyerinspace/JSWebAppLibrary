// HeaderCell.js
import { AElement } from '../AElement.js';

class HeaderCell extends AElement {
    constructor() {
        super('th');
    }

    execute(strategy, param) {
        return strategy.cell(this, param);
    }
}

export { HeaderCell };