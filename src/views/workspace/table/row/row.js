import cell from './cell/cell.js';
import cn from './row.css';
import template from './row.jst';

function prepareCN(state) {
    let root = cn._root = [cn.root];

    if (state.isCurrent) {
        root.push(cn.is_current);
    }

    cn._root = root.join(' ');

    return cn;
}

export default function (row) {
    return template({
        row: row,
        cellsHTML: row.cols.map(cell).join(''),
        cn: prepareCN(row)
    });
}
