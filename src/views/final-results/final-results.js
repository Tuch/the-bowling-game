import cn from './final-results.css';
import template from './final-results.jst';

export default function (play) {
    return template({
        cn: cn,
        finalResults: play.finalResults
    });
}
