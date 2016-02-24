import cell from '../cell/cell.js';
import cn from './row.css';
import template from './row.jst';

export default function (row) {
    return template({
        row: row,
        cellsHTML: row.cols.map(cell).join(''),
        cn: cn
    });
}
