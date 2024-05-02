import { AbstractNode } from '../node/AbstractNode.js';

export class AbstractViewNode extends AbstractNode {
    constructor(id, type, tag) {
        super(id, type);
        this._element = document.createElement(tag);
        this._element.node = this;

        this._element.addEventListener('click', (e) => {
            this.notify('click', this);
        });
        this._element.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        this._element.addEventListener('dragenter', (e) => {
            if(e.target.node.hasClass('droptarget'))
                e.target.node.addClass('active');
        });
        this._element.addEventListener('dragleave', (e) => {
            e.target.node.removeClass('active');
        });
    }

    getDom() {
        return this._element;
    }

    hasClass(className) {
        return this._element.classList.contains(className);
    }

    addClass(className) {
        this._element.classList.add(className);
        return this;
    }

    removeClass(className) {
        this._element.classList.remove(className);
        return this;
    }

    setProperty(key, value) {
        super.setProperty(key, value);
        this._element.setAttribute(key, value);
        return this;
    }

    removeProperty(key) {
        super.removeProperty(key);
        this._element.removeAttribute(key);
        return this;
    }

    addChild(viewNode) {
        super.addChild('elements', viewNode);
        this._element.appendChild(viewNode.getDom());
        return this;
    }

    removeChild(viewNode) {
        super.removeChild('elements', viewNode);
        this._element.removeChild(viewNode.getDom());
        return this;
    }

    makeDraggable(){
        this.setProperty('draggable', 'true');
        this._element.addEventListener('dragstart', (e) => {
            this.addClass('drag');
        });
        this._element.addEventListener('dragend', (e) => {
            this.removeClass('drag');
        });
        this._element.addEventListener('drop', (e) => {
            e.preventDefault();
            if(e.target.hasClass('droptarget'))
                e.target.node.addChild(e.transfer.node);
            this.removeClass('drag');
        });
        return this;
    }

    makeDropArea(){
        this.addClass('droptarget');
        return this;
    }
}