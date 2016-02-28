import cn from './final-results.css';
import template from './final-results.jst';

export default function (finalResults) {
    return template({
        cn,
        finalResults
    });
}
