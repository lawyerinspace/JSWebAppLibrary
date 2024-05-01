import { AView } from './AView.js'; // Assuming AView is in the same directory
import { Table, Row, Cell, HeaderCell } from '../../element/table/library.js';
import { Button } from '../../element/form/library.js';

class DataTableView extends AView {
    constructor(config) {
        super();
        this.config = config; // Configuration for the ListView
    }

    render(data, actions) {
        const table = new Table();

        // Optionally, set a caption if needed
        if (this.config.caption) {
            table.getCaption().setText(this.config.caption);
        }

        // Create the header
        const headerRow = new Row();
        this.config.elements.forEach(element => {
            const header = new HeaderCell();
            header.setText(element.label || element.field);
            headerRow.addChild(header);
        });
        table.getHeader().addChild(headerRow);

        // Create the body rows
        data.forEach(item => {
            const row = new Row();
            this.config.elements.forEach(element => {
                const cell = new Cell();
                cell.setText(item[element.field]);
                row.addChild(cell);
            });

            // Subscribe to actions
            this.config.actions.forEach(action => {
                if (actions && actions[action.keyword]) {
                    item.subscribe(action.keyword, actions[action.keyword]);
                }
            });

            this.addActions(row, item, actions); // Add action buttons to the row
            table.getBody().addChild(row);
        });

        return table;
    }

    addActions(row, item, actions) {
        // Append action buttons to the row
        const actionCell = new Cell();
        this.config.actions.forEach(action => {
            const button = new Button(action.label);
            button.onClick(() => item.notify(action.keyword, action.message));
            actionCell.addChild(button);
        });
        row.addChild(actionCell);
    }
}

export { DataTableView };
