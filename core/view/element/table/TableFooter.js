// TableFooter.js
import { ATableContainer } from './ATableContainer.js';

class TableFooter extends ATableContainer {
    constructor() {
        super('tfoot');
    }

    execute(strategy, param) {
        return strategy.tableFooter(this, param);
    }
}

export { TableFooter };