import table from '../table/table.js';
import modal from '../modal/modal.js';
import cn from './app.css';
import template from './app.jst';

export default function (app) {
    return template({
        tableHTML: table(app),
        modalHTML: modal(app),
        cn
    });
}
