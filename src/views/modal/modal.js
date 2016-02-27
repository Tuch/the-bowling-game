import gameForm from '../game-form/game-form.js';
import finalResults from '../final-results/final-results.js';
import cn from './modal.css';
import template from './modal.jst';

function prepareCN(modal) {
    let root = [cn.root];

    if (modal.style) {
        root.push(cn['style_' + modal.style]);
    } else {
        root.push(cn.info);
    }

    if (!modal.isOpen) {
        root.push('hidden');
    }

    cn._root = root.join(' ');

    return cn;
}

export default function (modal) {
    let contentHTML = '';

    switch (modal.name) {
        case 'game-form':
            contentHTML = gameForm(modal.data);
        break;
        case 'final-results':
            contentHTML = finalResults(modal.data);
        break;
    }

    return template({
        cn: prepareCN(modal),
        contentHTML
    });
}
