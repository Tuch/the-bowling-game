import cn from './author.css';
import template from './author.jst';
import imgSrc from 'images/speedmode-icon.png';

function prepareCN(state) {
    let root = cn._root = [cn.root];

    if (state.isSpeedMode) {
        root.push(cn.id_speedmode);
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
