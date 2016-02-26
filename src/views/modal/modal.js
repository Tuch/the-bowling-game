import gameForm from '../game-form/game-form.js';
import cn from './modal.css';
import template from './modal.jst';

export default function (modal) {
    let contentHTML = '';

    if (modal.name === 'game-form') {
        contentHTML = gameForm(modal.data);
    }

    return template({
        cn: cn,
        style: modal.style || 'info',
        contentHTML
    });
}
