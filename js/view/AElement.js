import { AObject } from '../AObject.js';
import { ActiveViewState, InactiveViewState } from './state/library.js';

class AElement extends AObject {
    constructor(tagName) {
        super();
        this.element = document.createElement(tagName);
        this.state = new ActiveViewState();

        this.subscribe('stateChange', (element, state) => {
            state.execute({
                inactive: (el) => el.makeInactive(),
                active: (el) => el.makeActive()
            }, element);
        });
    }

    getDom() {
        return this.element;
    }

    appendTo(element) {
        element.append(this);
        return this;
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

    makeActive(){
        this.setState(new ActiveViewState());
        return this;
    }

    makeInactive(){
        this.setState(new InactiveViewState());
        return this;
    }

    toggleState(){
        this.setState(this.state.toggle());
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
        return this.getState().execute(strategy, this, param);
    }
}

export { AElement };
