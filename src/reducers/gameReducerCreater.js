import names from './names.json';
import { sumArray } from 'helpers';

const FRAMES_LENGTH = 10;

function range (length) {
    return Array(length).join(' ').split(' ').map((v, i) => i);
}

function pad (value, length) {
    value = String(value);
    length = length || 2;

    while (value.length < length) {
        value = '0' + value;
    }

    return value;
}

function calcDiffTime (state) {
    let totalSeconds = Math.floor((new Date() - state.startTime) / 1000),
        rightSide = totalSeconds % 60,
        leftSide = (totalSeconds - rightSide) / 60;

    state.diffTime = pad(leftSide, 2) + ':' + pad(rightSide, 2);

    return state;
}

function getRandomName () {
    return names[rand(names.length - 1)];
}

function rand (max) {
    return Math.round(Math.random() * max);
}

function rollBall (pins) {
    let values = [rand(pins)];

    return Math.max(...values);
}

function getInitialState (players) {
    let state = {
        players: players || [getRandomName(), getRandomName()],
        currentPlayer: 0,
        currentFrame: 0,
        startTime: new Date(),
        diffTime: '00:00',
        inProgress: true,
        lastResult: ''
    };

    state.frames = createFrames(state);

    return state;
}

function createFrames (state) {
    return range(FRAMES_LENGTH).map((val) => {
        let frame = {
            title: val + 1
        };

        state.players.reduce((acc, player, index) => {
            acc[index] = [];
            acc[index].total = '';

            return acc;
        }, frame);

        return frame;
    });
}

function nextPlayer (state) {
    if (isLastFrame(state) && isLastPlayer(state)) {
        state.inProgress = false;
    } else {
        let player = state.currentPlayer;

        state.currentPlayer = player = player === state.players.length - 1 ? 0 : player + 1;

        if (player === 0) {
            state.currentFrame = state.currentFrame < state.frames.length - 1 ? state.currentFrame + 1 : state.currentFrame;
        }
    }

    return state;
}

function getBonusFrames (state) {
    let frames = state.frames.slice(Math.max(0, state.currentFrame - 2), state.currentFrame + 1).map((frame) => {
        return frame[state.currentPlayer];
    });

    let currFrame = frames[frames.length - 1];
    frames.length--;

    let r = 2 - currFrame.length;
    let bonusFrames = [];

    while (r && frames.length) {
        let frame = frames.pop();

        if (
            (r === 1 && frame[0].value === 10) ||
            (r === 2 && (frame.total === 10))
        ) {
            bonusFrames.unshift(frame);
        }

        r -= frame.length;
    }

    return bonusFrames;
}

function isLastPlayer (state) {
    return state.players.length - 1 === state.currentPlayer;
}

function isLastFrame (state) {
    return state.currentFrame === FRAMES_LENGTH - 1;
}

function onTickTimer (state) {
    return calcDiffTime(state);
}

function onThrowBall (state) {
    if (!state.inProgress) {
        return state;
    }

    let frame = state.frames[state.currentFrame][state.currentPlayer];
    let pins = FRAMES_LENGTH;
    let playerName = state.players[state.currentPlayer];

    if (frame[0] && pins !== frame[0].value) {
        pins -= frame[0].value;
    }

    let bonusFrames = getBonusFrames(state);
    let value = Math.max(rollBall(pins), rollBall(pins));

    bonusFrames.forEach((frame) => {
        frame.total += value;
    });

    let roll = { value, special: '' };

    frame.push(roll);

    let rollsSum = sumArray(frame.map(roll => roll.value));
    frame.total = rollsSum;

    if (frame.length === 1) {
        if (roll.value === 10) {
            roll.title = 'X';
            roll.special = 'strike';

            if (!isLastFrame(state)) {
                nextPlayer(state);
            }
        } else {
            roll.title = roll.value;
        }
    } else if (frame.length === 2) {
        if (frame.total === 10) {
            roll.title = '/';
            roll.special = 'spare';
        } else {
            roll.title = roll.value;
        }

        if (isLastFrame(state) && rollsSum >= 10) {

        } else {
            nextPlayer(state);
        }
    } else if (frame.length === 3) {
        roll.title = roll.value;

        nextPlayer(state);
    }

    state.lastResult = `${value}`;

    if (roll.special) {
        state.lastResult += ` ${roll.special.toUpperCase()}!`;
    }

    return state;
}

function onUpdatePlayerName (state, data) {
    state.players[data.index] = data.value;
    state.players = state.players.filter(player => player);

    if (!state.players.length) {
        state.players.push(getRandomName());
    }

    state.frames = createFrames(state);

    return state;
}

function onPlayGame (state) {
    return getInitialState(state.players);
}

function reducerCreate (types) {
    return function (state, action = {}) {
        if (!state) {
            state = getInitialState();
        }

        switch (action.type) {
            case types.PLAY_GAME:
                state = onPlayGame(state);
            break;
            case types.TICK_TIMER:
                state = onTickTimer(state);
            break;
            case types.THROW_BALL:
                state = onThrowBall(state);
            break;
            case types.UPDATE_PLAYER_NAME:
                state = onUpdatePlayerName(state, action.data);
            break;
        }

        return state;
    }
}

export default reducerCreate;
