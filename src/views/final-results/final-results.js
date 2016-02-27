import cn from './final-results.css';
import template from './final-results.jst';

export default function (game) {
    return template({
        cn: cn,
        finalResults: game.finalResults
    });
}
