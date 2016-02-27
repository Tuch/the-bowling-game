import gameForm from '../game-form/game-form.js';
import finalResults from '../final-results/final-results.js';
import cn from './modal.css';
import template from './modal.jst';

export default function (app) {
    let contentHTML = '';

    switch (app.modal.name) {
        case 'game-form':
            contentHTML = gameForm(app.play);
        break;
        case 'final-results':
            contentHTML = finalResults(app.play);
        break;
    }

    return template({
        cn: cn,
        style: app.modal.style || 'info',
        isOpen: app.modal.isOpen,
        contentHTML
    });
}
