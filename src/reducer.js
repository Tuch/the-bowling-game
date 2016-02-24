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

function roll (pins) {
    return Math.round(Math.random() * 10 % pins);
}

function throwBall (pins) {
    return Math.max.apply(null, [roll(pins)]);
}

function getInitialState (players) {
    let frames = [1,2,3,4,5,6,7,8,9,10].map((val) => {
        let frame = {
            title: val
        };

        players.reduce((acc, player, index) => {
            acc[index] = [];
            acc[index].total = '';

            return acc;
        }, frame);

        return frame;
    });

    return {
        frames: frames,
        players: players,
        currentPlayer: 0,
        currentFrame: 0,
        startTime: new Date(),
        diffTime: '00:00',
        ended: false
    };
}

function calcRows(state) {
    let rows = state.rows = [];
    let row = {
        isHead: true,
        cols: state.frames.map(frame => ({ text: frame.title }))
    };

    row.cols.unshift({text:state.diffTime, isLeft: true});

    rows.push(row);

    let pRows = state.players.map((player, index) => {
        let cols = state.frames.map((frame) => {
            let rolls = frame[index];
            let cell = {
                0: rolls[0] ? rolls[0].title : '',
                1: rolls[1] ? rolls[1].title : '',
                total: rolls.total
            };

            return cell;
        });

        cols.unshift({
            text: player,
            isLeft: true
        });

        return { cols };
    });

    rows.push(...pRows);

    return state;
}

function sum(arr) {
    return arr.reduce((acc, val) => {
        return acc + val;
    }, 0);
}

function nextMove(state) {
    let player = state.currentPlayer;

    state.currentPlayer = player = player === state.players.length - 1 ? 0 : player + 1;

    if (player === 0) {
        state.currentFrame = state.currentFrame < state.frames.length - 1 ? state.currentFrame + 1 : state.currentFrame;
    }

    return state;
}

function getLastRols() {

}

function onTickTimer (state) {
    return calcDiffTime(state);
}

function onThrowBall(state) {
    let frame = state.frames[state.currentFrame][state.currentPlayer], prevFrame, prevPrevFrame;
    let pins = 10;

    if (frame[0]) {
        pins -= frame[0].value;
    }

    let value = throwBall(pins);

    let roll = { value };

    frame.push(roll);

    let rollsSum = sum(frame.map(roll => roll.value));

    if (frame.length === 1) {
        if (roll.value === 10) {
            roll.title = 'X';

            frame.total = 10;
            nextMove(state);
        } else {
            roll.title = roll.value;
            frame.total = roll.value;
        }
    } else if (frame.length === 2) {
        if (rollsSum === 10) {
            roll.title = '/';
            frame.total = 10;
        } else {
            roll.title = roll.value;
            frame.total = rollsSum;
        }

        nextMove(state);
    }

    return state;
}

let reducer = function (state, action = {}) {
    if (!state) {
        state = getInitialState(['Player 1', 'Player 2']);
    }

    switch (action.type) {
        case reducer.TICK_TIMER:
            state = onTickTimer(state);
        break;
        case reducer.THROW_BALL:
            state = onThrowBall(state);
        break;
    }

    return calcRows(state);
}

export default reducer;

reducer.TICK_TIMER = 'TICK_TIMER';
reducer.THROW_BALL = 'THROW_BALL';
