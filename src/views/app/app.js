import row from '../row/row.js';
import modal from '../modal/modal.js';
import mainImageSrc from 'file!images/main.jpg';
import cn from './app.css';
import template from './app.jst';

export default function (app) {
    let modalHTML = '';

    if (app.modal) {
        modalHTML = modal(app.modal);
    }

    return template({
        rowsHTML: app.rows.map(row).join(''),
        modalHTML,
        mainImageSrc,
        cn
    });
}
