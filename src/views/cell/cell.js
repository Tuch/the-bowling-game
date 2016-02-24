import cn from './cell.css';
import template from './cell.jst';

export default function (cell) {
    return template({
        cell: cell,
        cn: cn
    });
}
