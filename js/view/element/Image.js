// Image.js
import { AElement } from '../AElement.js';

class Image extends AElement {
    constructor(src, alt) {
        super('img');
        this.element.src = src || '';
        this.element.alt = alt || '';
    }

    setSrc(src) {
        this.element.src = src || '';
        return this;
    }

    setAlt(alt) {
        this.element.alt = alt || '';
        return this;
    }

    execute(strategy, param) {
        return strategy.image(this, param);
    }
}

export { Image };