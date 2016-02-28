import index from './index.html';
import cn from './css/main.css';
import * as vdom from './virtual-dom.js';
import assignEvents from './assign-events.js';

// react style:
import app from './views/app.js';

// redux style:
import reducer from './reducers/appReducer.js';
import * as actions from './reducers/actions.js';

class App {
    constructor (state) {
        this.initAppNode()
            .setState(state)
            .initGameTimer()
            .assignEvents();
    }

    getEvents () {
        return {
            'click': [ 'main', 'game-form', 'modal', 'final-results' ],
            'focusout': [ 'game-form' ]
        };
    }

    assignEvents () {
        assignEvents(this, this.getEvents());

        return this;
    }

    initAppNode () {
        this.appNode = document.getElementById('app');

        return this;
    }

    initGameTimer () {
        this.gameTimer && clearInterval(this.gameTimer);

        this.gameTimer = setInterval(() => {
            this.reduceAction(actions.tickTimer());
        }, 1000);

        return this;
    }

    startRollBallAnimation (callback) {
        this.setState({
            $rollBallAnimation: true
        });

        setTimeout(() => {
            this.setState({
                $rollBallAnimation: false
            });

            callback();
        }, 1200);

        return this;
    }

    setState(state, noRender) {
        this.state = Object.assign(this.state || {}, state);

        !noRender && this.render();

        return this;
    }

    reduceAction (action, noRender) {
        this.setState(reducer(this.state, action), noRender);

        return this;
    }

    render() {
        requestAnimationFrame(() => {
            let HTML = app(this.state);
            let vNode = vdom.vNodeFromHTML(HTML);

            if (this.vNode && this.node) {
                vdom.applyPatch(this.node, vdom.diff(this.vNode, vNode));
            } else {
                this.node = vdom.createElement(vNode);
                this.appNode.innerHTML = '';
                this.appNode.appendChild(this.node);
            }

            this.vNode = vNode;
        });

        return this;
    }

    onGameFormInputFocusout (e) {
        this.reduceAction(actions.updatePlayerName({
            index: parseInt(e.target.getAttribute('data-index')),
            value: e.target.value
        }));
    }

    onFinalResultsNewClick () {
        this.reduceAction(actions.newGame());
    }

    onMainRollClick () {
        if (this.isAnimationInProgress()) {
            return;
        }

        this.reduceAction(actions.throwBall(), true)
            .startRollBallAnimation(() => {
                if (!this.state.game.inProgress) {
                    this.reduceAction(actions.endGame());
                }

                this.render();
            });
    }

    onGameFormPlayClick () {
        this.reduceAction(actions.playGame());
    }

    onModalCloseClick () {
        this.reduceAction(actions.closeModal());
    }

    isAnimationInProgress () {
        return this.state.$rollBallAnimation;
    }
}

new App(reducer());
