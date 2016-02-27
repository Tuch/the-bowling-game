import row from '../row/row.js';
import cn from './table.css';
import template from './table.jst';

export default function (app) {
    return template({
        rowsHTML: app.play.rows.map(row).join(''),
        cn
    });
}
