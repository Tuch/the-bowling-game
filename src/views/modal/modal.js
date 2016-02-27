import gameForm from '../game-form/game-form.js';
import finalResults from '../final-results/final-results.js';
import cn from './modal.css';
import template from './modal.jst';

function prepareCN(state) {
    let root = [cn.root];

    if (state.modal.style) {
        root.push(cn['style_' + state.modal.style]);
    } else {
        root.push(cn.info);
    }

    if (!state.modal.isOpen) {
        root.push('hidden');
    }

    cn._root = root.join(' ');

    return cn;
}

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
        cn: prepareCN(app),
        contentHTML
    });
}
