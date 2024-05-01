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

    setState(state) {
        this.state = state;
        this.notify('stateChange', state);
        return this;
    }

    getState() {
        return this.state;
    }

    subscribe(actionKey, listener) {
        if (!this.listeners[actionKey]) {
            this.listeners[actionKey] = [];
        }
        this.listeners[actionKey].push(listener);
        return this;
    }

    unsubscribe(actionKey, listener) {
        if (this.listeners[actionKey]) {
            this.listeners[actionKey] = this.listeners[actionKey].filter(l => l !== listener);
        }
        return this;
    }

    notify(actionKey, parameter) {
        if (this.listeners[actionKey]) {
            this.listeners[actionKey].forEach(listener => listener(this, parameter));
        }
        return this;
    }

    append(object) {
        this.next = this.visit({
            empty: (listItem, parameter) => listItem,
            notEmpty: (listItem, parameter) => listItem.getNext().append(parameter)
        }, object);
        this.notify('append', object);
        return this;
    }

    remove(object) {
        this.next = this.visit({
            empty: (listItem, parameter) => listItem,
            notEmpty: (listItem, parameter) => {
                if (listItem === parameter) {
                    return listItem.getNext();
                } else {
                    listItem.next = listItem.getNext().remove(this, parameter);
                    return listItem;
                }
            }
        }, object);
        this.notify('remove', object);
        return this;
    }

    getNext(){
        return this.next;
    }

    addChild(child) {
        this.children.push(child);
        this.notify('childAdded', child);
        return this;
    }

    removeChild(child) {
        this.children = this.children.filter(c => {
            if (c === child) {
                this.notify('childRemoved', child);
                return false;
            }
            return true;
        });
        return this;
    }

    getChildren(){
        return this.children();
    }

    execute(strategy, param) {
        throw new Error('Method execute must be implemented in concrete class.');
    }

    visit(visitor, parameter) {
        return visitor.notEmpty(this, parameter);
    }
}

export { AObject };
