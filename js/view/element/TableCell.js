// TableCell.js
import { AElement } from '../AElement.js';

class TableCell extends AElement {
    constructor(text) {
        super('td');
        this.element.innerText = text || '';
    }

    setText(text) {
        this.element.innerText = text || '';
        return this;
    }
}

export { TableCell };