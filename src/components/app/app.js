import row from '../row/row.js';
import cn from './app.css';
import template from './app.jst';

export default function (app) {
    return template({
        headHTML: row(app.rows[0]),
        playersHTML: app.rows.slice(1).map(row).join(''),
        cn: cn
    });
}
