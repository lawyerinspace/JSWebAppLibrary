// TableBody.js
import { ATableContainer } from './ATableContainer.js';

class TableBody extends ATableContainer {
    constructor() {
        super('tbody');
    }

    execute(strategy, param) {
        return strategy.tableBody(this, param);
    }
}

export { TableBody };