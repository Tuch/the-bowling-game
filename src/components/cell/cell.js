import cn from './cell.css';
import template from './cell.jst';

export default function (col) {
    return template({
        col: col,
        cn: cn
    });
}
