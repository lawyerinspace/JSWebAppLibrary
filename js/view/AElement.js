import { AObject } from '../AObject.js';

class AElement extends AObject {
    constructor(tagName) {
        super();
        this.element = document.createElement(tagName);
    }

    visit(visitor, parameter) {
        throw new Error('visit method must be implemented in concrete class.');
    }

    getDom() {
        return this.element;
    }

    append(element) {
        this.addChild(element);
        this.element.appendChild(element.getDom());
    }

    onClick(handler) {
        this.element.addEventListener('click', () => {
            this.notify('click', handler);
        });
    }

    onRelease(handler) {
        this.element.addEventListener('mouseup', () => {
            this.notify('release', handler);
        });
    }

    onMouseover(handler) {
        this.element.addEventListener('mouseover', () => {
            this.notify('mouseover', handler);
        });
    }
}

export { AElement };
