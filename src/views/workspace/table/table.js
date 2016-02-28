import row from './row/row.js';
import cn from './table.css';
import template from './table.jst';

export default function (state) {
    return template({
        rowsHTML: state.rows.map(row).join(''),
        cn
    });
}
