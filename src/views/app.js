import workspace from './workspace/workspace.js';
import rollballAnimation from './rollball-animation/rollball-animation.js';
import modal from './modal/modal.js';
import cn from './app.css';
import template from './app.jst';

export default function (state) {
    return template({
        modalHTML: state.modal ? modal(state.modal) : '',
        rollballAnimationHTML: state.$rollBallAnimation ? rollballAnimation(state.game.lastResult) : '',
        workspaceHTML: workspace(state),
        cn
    });
}
