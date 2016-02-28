import cn from './author.css';
import template from './author.jst';
import imgSrc from 'images/debug-bug-icon.png';

function prepareCN(state) {
    let root = cn._root = [cn.root];

    if (state.isDebugMode) {
        root.push(cn.id_debugmode);
    }

    cn._root = root.join(' ');

    return cn;
}

export default function (state) {
    return template({
        imgSrc,
        cn: prepareCN(state)
    });
}
