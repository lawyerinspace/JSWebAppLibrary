import { AElement } from '../AElement.js';

class Link extends AElement {
    constructor(text, href) {
        super('a');
        this.element.innerText = text || '';
        this.element.href = href || '#'; // Set default href if not provided
    }

    setText(text) {
        this.element.innerText = text || '';
        return this;
    }

    setAddress(href) {
        this.element.href = href || '#';
        return this;
    }

    execute(strategy, param) {
        return strategy.text(this, param);
    }
}

export { Link };
