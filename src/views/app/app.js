import row from '../row/row.js';
import cn from './app.css';
import template from './app.jst';

export default function (app) {
    return template({
        rowsHTML: app.rows.map(row).join(''),
        cn: cn
    });
}
