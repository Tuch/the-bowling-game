import gameModalReducerCreater from './gameModalReducer';
import gamePlayReducerCreater from './gamePlayReducer';

let types = {
    TICK_TIMER: 'TICK_TIMER',
    THROW_BALL: 'THROW_BALL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    PLAY_GAME: 'PLAY_GAME',
    NEW_GAME: 'NEW_GAME',
    UPDATE_PLAYER_NAME: 'UPDATE_PLAYER_NAME'
};

let gameModalReducer = gameModalReducerCreater(types);
let gamePlayReducer = gamePlayReducerCreater(types);

function getInitialState() {
    return {};
}

function reducer(state = getInitialState(), action = {}) {
    state.play = gamePlayReducer(state.play, action);
    state.modal = gameModalReducer(state.modal, action);

    return state;
}

let actions = {};

actions.updatePlayerName = function (data) {
    return {
        type: types.UPDATE_PLAYER_NAME,
        data: data
    };
};

actions.throwBall = function () {
    return {
        type: types.THROW_BALL
    };
};

actions.playGame = function () {
    return {
        type: types.PLAY_GAME
    };
};

actions.newGame = function () {
    return {
        type: types.NEW_GAME
    };
};

actions.closeModal = function () {
    return {
        type: types.CLOSE_MODAL
    };
};

actions.tickTimer = function () {
    return {
        type: types.TICK_TIMER
    };
};

//Object.assign(reducer, types);
Object.assign(reducer, actions);

export default reducer;


