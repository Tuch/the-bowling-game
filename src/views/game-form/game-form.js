import cn from './game-form.css';
import template from './game-form.jst';

export default function (data) {
    return template({
        cn: cn,
        data
    });
}
