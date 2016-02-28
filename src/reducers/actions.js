import * as types from './types';

export let updatePlayerName = function (data) {
    return {
        type: types.UPDATE_PLAYER_NAME,
        data: data
    };
};

export let throwBall = function () {
    return {
        type: types.THROW_BALL
    };
};

export let playGame = function () {
    return {
        type: types.PLAY_GAME
    };
};

export let newGame = function () {
    return {
        type: types.NEW_GAME
    };
};

export let endGame = function () {
    return {
        type: types.END_GAME
    };
};

export let closeModal = function () {
    return {
        type: types.CLOSE_MODAL
    };
};

export let tickTimer = function () {
    return {
        type: types.TICK_TIMER
    };
};

export let debugMode = function () {
    return {
        type: types.DEBUG_MODE
    };
};

