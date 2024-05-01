// Paragraph.js
import { AElement } from '../AElement.js';

class Paragraph extends AElement {
    constructor(text) {
        super('p');
        this.element.innerText = text || '';
    }

    setText(text) {
        this.element.innerText = text || '';
        return this;
    }
}

export { Paragraph };