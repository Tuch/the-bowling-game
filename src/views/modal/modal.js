import gameForm from '../game-form/game-form.js';
import cn from './modal.css';
import template from './modal.jst';

export default function (app) {
    let contentHTML = '';

    if (app.modal.name === 'game-form') {
        contentHTML = gameForm(app.play);
    }

    return template({
        cn: cn,
        style: app.modal.style || 'info',
        isOpen: app.modal.isOpen,
        contentHTML
    });
}
