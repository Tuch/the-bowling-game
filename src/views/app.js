import table from './table/table.js';
import modal from './modal/modal.js';
import cn from './app.css';
import template from './app.jst';

export default function (app) {
    return template({
        tableHTML: app.table ? table(app.table) : '',
        modalHTML: app.modal ? modal(app.modal) : '',
        rollBallAnimation: app.$rollBallAnimation,
        lastResult: app.game.lastResult,
        cn
    });
}
