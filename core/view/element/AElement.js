import { AObject } from '../../AObject.js';
import { ActiveViewState, InactiveViewState } from '../state/library.js';

class AElement extends AObject {
    constructor(tagName) {
        super();
        this.element = document.createElement(tagName);
    }

    getDom() {
        return this.element;
    }

    setId(id) {
        this.element.id = id;
        return this;
    }

    getId() {
        return this.element.id;
    }

    setText(text) {
        this.element.innerText = text;
        return this;
    }

    appendTo(element) {
        element.append(this);
        return this;
    }

    append(element) {
        super.append(element);
        this.getDom().parentNode.appendChild(element.getDom());
        return this;
    }

    remove(element) {
        super.remove(element);
        this.getDom().parentNode.removeChild(element.getDom());
        return this;
    }

    addChild(element) {
        super.addChild(element);
        this.element.appendChild(element.getDom());
        return this;
    }

    removeChild(element) {
        super.removeChild(element);
        element.getDom().removeChild(element.getDom());
        return this;
    }

    setAttribute(attribute, value) {
        this.element.setAttribute(attribute, value);
        return this;
    }

    removeAttribute(attribute) {
        this.element.removeAttribute(attribute);
        return this;
    }

    addClass(className) {
        this.element.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.element.classList.remove(className);
        return this;
    }

    enable() {
        this.element.removeAttribute('disabled');
        return this;
    }

    disable() {
        this.element.setAttribute('disabled', '');
        return this;
    }

    show() {
        this.removeClass('hidden')
        return this;
    }

    hide() {
        this.addClass('hidden');
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

    execute(strategy, param){
        throw("Execute method from AElement must be implemented.");
    }
}

export { AElement };
