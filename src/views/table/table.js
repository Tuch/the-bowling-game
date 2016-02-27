import row from '../row/row.js';
import cn from './table.css';
import template from './table.jst';

export default function (table) {
    return template({
        rowsHTML: table.rows.map(row).join(''),
        cn
    });
}
