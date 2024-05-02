import { nullNode } from './NullNode.js';

export class AbstractNode {
    constructor(id, type) {
        this._id = id || `node-${new Date().getTime()}`;
        this._type = type;
        this._parents = {};
        this._children = {};
        this._previous = nullNode;
        this._next = nullNode;
        this._listeners = {};
        this._properties = {};

        if (new.target === AbstractNode) {
            throw new Error("Cannot construct AbstractNode instances directly");
        }
    }

    // ID methods
    getId(){
        return this._id;
    }

    setId(id){
        this._id = id;
        this.notify('update', {[id]: id});
        return this;
    }

    // Property methods
    setProperty(key, value) {
        this._properties[key] = value;
        this.notify('update', { [key]: value });
        return this;
    }

    getProperty(key) {
        return this._properties[key];
    }

    getProperties() {
        return this._properties;
    }

    hasProperty(key) {
        return this._properties.hasOwnProperty(key);
    }

    removeProperty(key) {
        delete this._properties[key];
        this.notify('update', { [key]: null });
        return this;
    }

    // Parent methods
    addParent(type, parent) {
        if (!this._parents[type]) {
            this._parents[type] = {};
        }
        if (!this._parents[type][parent.getId()]){
            parent.addChild(this._type, this);
            this.notify('addParent', {[type]: type, [parent]: parent});
        }
        this._parents[type][parent.getId()] = parent;
        return this;
    }
    
    getParentById(type, id) {
        if (!this._parents[type]) {
            notify('error', `No parents of type ${type} found`);
        }
        return this._parents[type][id] || notify('error', `Parent of type ${type} with id ${id} not found`);
    }
    
    getParentsByType(type) {
        return this._parents[type] || notify('error', `No parents of type ${type} found`);
    }
    
    removeParent(type, parent) {
        if (this._parents[type]) {
            if (this._parents[type][parent.getId()]){
                delete this._parents[type][parent.getId()];
                parent.removeChild(this._type, this);
                this.notify('removeParent', {[type]: type, [parent]: parent});
            }
        }
        return this;
    }

    getParents() {
        return this._parents;
    }

    // Child methods
    addChild(type, child) {
        if (!this._children[type]) {
            this._children[type] = {};
        }
        if (!this._children[type][child.getId()]){
            child.addParent(this._type, this);
            this.notify('addChild', {[type]: type, [child]: child});
        }
        this._children[type][child.getId()] = child;
        return this;
    }

    getChildById(type, id) {
        if (!this._children[type]) {
            notify('error', `No children of type ${type} found`);
        }
        return this._children[type][id] || notify('error', `Child of type ${type} with id ${id} not found`);
    }

    getChildrenByType(type) {
        return this._children[type] || notify('error', `No children of type ${type} found`);
    }

    removeChild(type, child) {
        if (this._children[type]) {
            if(this._children[type][child.getId()]){
                delete this._children[type][child.getId()];
                child.removeParent(this.type, this);
                this.notify('removeChild', {[type]: type, [child]: child});
            }
        }
        return this;
    }

    getChildren(){
        return this._children;
    }


    // Previous node methods
    setPrevious(node) {
        this._previous = node;
        this.notify('update', { [previous]: node });
        return this;
    }

    getPrevious() {
        return this._previous;
    }

    // Next node methods
    setNext(node) {
        this._next = node;
        this.notify('update', { [next]: node });
        return this;
    }

    getNext() {
        return this._next;
    }

    // Listener methods
    on(keyword, listener) {
        if (!this._listeners[keyword]) {
            this._listeners[keyword] = [];
        }
        this._listeners[keyword].push(listener);
        return this;
    }

    notify(keyword, data) {
        if (this._listeners[keyword]) {
            this._listeners[keyword].forEach(listener => listener(this, data));
        }
        return this;
    }

    // Strategy execution method
    execute(strategy, parameter) {
        try {
            throw new Error('Abstract method! Subclass must implement execute method.');
        } catch (error) {
            this.notify('error', error.message);
        }
        return this;
    }

    // Visitor pattern method
    visit(visitor, parameter) {
        return visitor.node(this, parameter);
    }

    // Abstract toJSON method
    toJSON() {
        throw new Error('Abstract method! Subclass must implement toJSON method.');
    }
}