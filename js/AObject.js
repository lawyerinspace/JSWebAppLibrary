import { EmptyObject } from './EmptyObject.js';

class AObject {
    constructor() {
        if (new.target === AObject) {
            throw new Error('Abstract class AObject cannot be instantiated.');
        }
        this.children = new EmptyObject();
        this.listeners = {};
        this.next = new EmptyObject();
    }

    subscribe(actionKey, listener) {
        if (!this.listeners[actionKey]) {
            this.listeners[actionKey] = [];
        }
        this.listeners[actionKey].push(listener);
    }

    unsubscribe(actionKey, listener) {
        if (this.listeners[actionKey]) {
            this.listeners[actionKey] = this.listeners[actionKey].filter(l => l !== listener);
        }
    }

    notify(actionKey, parameter) {
        if (this.listeners[actionKey]) {
            this.listeners[actionKey].forEach(listener => listener(this, parameter));
        }
    }

    addChild(child) {
        this.children.push(child);
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
        return this;
    }
    
    append(object){
        this.next = this.visit({
            empty: (listItem, parameter) => listItem,
            notEmpty: (listItem, parameter) => listItem.getNext().append(parameter));
        }, object);

        return this;
    }

    remove(object){
        return this.visit({
            empty: (listItem, parameter) => listItem,
            notEmpty: (listItem, parameter) => {
                if(listItem === parameter){
                    return listItem.getNext();
                } else {
                    listItem.next = listItem.getNext().remove(this, parameter);
                    return listItem;
                }
            }
        }, object);
    }
  

    visit(visitor, parameter) {
        return visitor.notEmpty(this, parameter);
    }
}

export { AObject };
