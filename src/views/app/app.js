import row from '../row/row.js';
import modal from '../modal/modal.js';
import mainImageSrc from 'file!images/ball.png';
import cn from './app.css';
import template from './app.jst';

export default function (app) {
    return template({
        rowsHTML: app.play.rows.map(row).join(''),
        modalHTML: modal(app),
        mainImageSrc,
        cn
    });
}
