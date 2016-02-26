import index from './index.html';
import styles from './styles.css';
import * as vdom from './virtual-dom.js';

// react style
import app from './views/app/app.js';
// redux style
import reducer from './reducer.js';

class App {
    constructor (state) {
        this.initState(state)
            .initAppNode()
            .render()
            .initGameTimer()
            .assignEvents();
    }

    initState (state) {
        this.state = state;

        return this;
    }

    initAppNode () {
        this.appNode = document.getElementById('app');

        return this;
    }

    initGameTimer () {
        this.gameTimer && clearInterval(this.gameTimer);

        //this.gameTimer = setInterval(() => {
            //this.reduceAction({
                //type: reducer.TICK_TIMER
            //});
            //this.render();
        //}, 1000);

        return this;
    }

    reduceAction (action) {
        this.state = reducer(this.state, action);

        return this;
    }

    assignEvents () {
        document.addEventListener('click', this.onDocumentClick.bind(this));
        document.addEventListener('focusout', this.onDocumentFocusOut.bind(this));

        return this;
    }

    onDocumentClick (e) {
        let key = '';

        if (key = e.target.getAttribute('data-main')) {
            this.onRollClick(key);
        } else if (key = e.target.getAttribute('data-game-form')) {
            this.onGameFormClick(key);
        } else if (key = e.target.getAttribute('data-modal')) {
            this.onModalClick(key);
        } else {
            return;
        }

        this.render();
    }

    onDocumentFocusOut (e) {
        let key = '';

        if (key = e.target.getAttribute('data-game-form')) {
            this.onGameFormFocusOut(key, {
                index: parseInt(e.target.getAttribute('data-index')),
                value: e.target.value
            });
        } else {
            return;
        }

        this.render();
    }

    onGameFormFocusOut (key, data) {
        switch (key) {
            case 'input':
                this.reduceAction({
                    type: reducer.UPDATE_PLAYER_NAME,
                    data: data
                });
            break;
        }
    }

    onRollClick (key) {
        switch (key) {
            case 'roll':
                this.reduceAction({
                    type: reducer.THROW_BALL
                });
            break;
        }
    }

    onGameFormClick (key) {
        switch (key) {
            case 'play':
                this.reduceAction({
                    type: reducer.PLAY_GAME
                });
            break;
        }
    }

    onModalClick (key) {
        //switch (key) {
            //case 'close':
                //this.reduceAction({
                    //type: reducer.CLOSE_MODAL
                //});
            //break;
        //}
    }

    render() {
        requestAnimationFrame(() => {
            let HTML = app(this.state);
            let vNode = vdom.fromHTML(HTML);

            if (this.vNode && this.node) {
                vdom.applyPatch(this.node, vdom.diff(this.vNode, vNode));
            } else {
                this.node = vdom.createElement(vNode);
                this.appNode.innerHTML = '';
                this.appNode.appendChild(this.node);
            }

            this.vNode = vNode;
            this.fillNodes();
        });

        return this;
    }

    fillNodes() {
        this.timerNode = document.querySelectorAll('.head .left-col .cell')[0];

        return this;
    }
}

new App(reducer());
