import index from './index.html';
import styles from './styles.css';
import * as vdom from './virtual-dom.js';
import calc from './calc.js';
import mocks from './virtual-dom.mocks.json';


// like react
import app from './components/app/app.js';

// redux style
import reducer from './reducer.js';

class App {
    constructor (state) {
        this.initState(state)
            .initAppNode()
            .render()
            .fillNodes()
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

        this.gameTimer = setInterval(() => {
            this.reduceAction({
                type: reducer.TICK_TIMER
            });
            this.timerNode.innerHTML = this.state.diffTime;
        }, 1000);

        return this;
    }

    reduceAction (action) {
        this.state = reducer(this.state, action);

        return this;
    }

    assignEvents () {
        document.addEventListener('click', this.onDocumentClick.bind(this));

        return this;
    }

    onDocumentClick (e) {
        if (e.target.id === 'roll') {
            this.onRollClick();
        }
    }

    onRollClick () {
        this.reduceAction({
            type: reducer.THROW_BALL
        });

        this.render().fillNodes();

        console.log('roll', this.state);
    }

    render() {
        let state = calc(this.state);
        let HTML = app(state);
        let vNode = vdom.fromHTML(HTML);

        if (this.vNode && this.node) {
            vdom.applyPatch(this.node, vdom.diff(this.vNode, vNode));
        } else {
            this.node = vdom.createElement(this.vNode = vNode);
            this.appNode.innerHTML = '';
            this.appNode.appendChild(this.node);
        }

        return this;
    }

    fillNodes() {
        this.timerNode = document.querySelectorAll('.head .left-col .cell')[0];

        return this;
    }
}

new App(reducer());
