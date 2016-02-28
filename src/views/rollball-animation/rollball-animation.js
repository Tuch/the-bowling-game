import cn from './rollball-animation.css';
import template from './rollball-animation.jst';

export default function (lastResult) {
    return template({
        lastResult,
        cn
    });
}
