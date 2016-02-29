import author from './author/author.js';
import table from './table/table.js';
import button from './button/button.js';
import cn from './workspace.css';
import template from './workspace.jst';


export default function (state) {
    return template({
        authorHTML: state ? author(state) : '',
        tableHTML: state.table ? table(state.table) : '',
        buttonHTML: state ? button() : '',
        cn
    });
}
