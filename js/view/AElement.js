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
        super.append(element);
        this.getDom().appendChild(element.getDom());
        return this;
    }

    remove(element) {
        super.remove(element);
        const elementDom = element.getDom();
        elementDom.parentNode.removeChild(elementDom);
        return this;
    }

    addChild(element) {
        super.addChild(element);
        this.element.appendChild(element.getDom());
        return this;
    }

    removeChild(element) {
        super.removeChild(element);
        element.getDom().remove();
        return this;
    }

    onClick(handler) {
        this.element.addEventListener('click', () => {
            this.notify('click', handler);
        });
        return this;
    }

    onRelease(handler) {
        this.element.addEventListener('mouseup', () => {
            this.notify('release', handler);
        });
        return this;
    }

    onMouseover(handler) {
        this.element.addEventListener('mouseover', () => {
            this.notify('mouseover', handler);
        });
        return this;
    }
}

export { AElement };
