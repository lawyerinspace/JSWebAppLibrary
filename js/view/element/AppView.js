import { AElement } from './AElement.js';
import { Header } from './Header.js';
import { Navigation } from './Navigation.js';
import { Article } from './Article.js';
import { Footer } from './Footer.js';

class AppView extends AElement {
    constructor() {
        super('body');
        this._header = new Header();
        this._navigation = new Navigation();
        this._content = new Article();
        this._footer = new Footer();

        this.addChild(this._header);
        this.addChild(this._navigation);
        this.addChild(this._content);
        this.addChild(this._footer);

        document.documentElement.appendChild(this.element);
    }

    get header() {
        return this._header;
    }

    get navigation() {
        return this._navigation;
    }

    get content() {
        return this._content;
    }

    get footer() {
        return this._footer;
    }

    execute(strategy, param) {
        return strategy.appView(this, param);
    }
}

export { AppView };