// TableHeader.js
import { ATableContainer } from './ATableContainer.js';

class TableHeader extends ATableContainer {
    constructor() {
        super('thead');
    }

    execute(strategy, param) {
        return strategy.tableHeader(this, param);
    }
}

export { TableHeader };