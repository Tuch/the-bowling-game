import cn from './cell.css';
import template from './cell.jst';

function prepareCN(state) {
    let root = cn._root = [cn.root];

    if (state.isLeft) {
        root.push(cn.is_left);
    }

    if (state.isRight) {
        root.push(cn.is_right);
    }

    if (state.isTop) {
        root.push(cn.is_top);
    }

    if (state.isBottom) {
        root.push(cn.is_bottom);
    }

    if (state.isScores) {
        root.push(cn.is_scores);
    }

    cn._root = root.join(' ');

    return cn;
}

export default function (cell) {
    return template({
        cell: cell,
        cn: prepareCN(cell)
    });
}
