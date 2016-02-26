import cn from './game-form.css';
import template from './game-form.jst';

export default function (play) {
    return template({
        cn: cn,
        players: play.players
    });
}
