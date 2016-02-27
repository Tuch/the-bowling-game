import cn from './game-form.css';
import template from './game-form.jst';

export default function (game) {
    return template({
        cn: cn,
        players: game.players
    });
}
