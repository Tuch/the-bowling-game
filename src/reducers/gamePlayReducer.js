const FRAMES_LENGTH = 10;

function range(length) {
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

function roll (pins) {
    return Math.round(Math.random() * 10 % pins);
}

function throwBall (pins) {
    let values = [roll(pins)];

    return Math.max(...values);
}

function getInitialState (players) {
    players = players || ['Player 1', 'Player 2'];

    let frames = range(FRAMES_LENGTH).map((val) => {
        let frame = {
            title: val + 1
        };

        players.reduce((acc, player, index) => {
            acc[index] = [];
            acc[index].total = '';

            return acc;
        }, frame);

        return frame;
    });

    let state = {
        frames: frames,
        players: players,
        currentPlayer: 0,
        currentFrame: 0,
        startTime: new Date(),
        diffTime: '00:00',
        theEnd: false,
        lastResult: ''
    };

    return state;
}

function prepareRows(state) {
    let rows = [];
    let row = {
        isHead: true,
        cols: state.frames.map((frame, index) => ({
            text: frame.title,
            isRight: index === state.frames.length - 1,
            isTop: true
        }))
    };

    row.cols.unshift({text:state.diffTime, isLeft: true, isTop: true});

    rows.push(row);

    let pRows = state.players.map((player, pIndex) => {
        let cols = state.frames.map((frame, fIndex) => {
            let rolls = frame[pIndex];
            let cell = {
                0: rolls[0] ? rolls[0].title : '',
                1: rolls[1] ? rolls[1].title : '',
                total: rolls.total,
                isRight: fIndex === state.frames.length - 1,
                isBottom: pIndex === state.players.length - 1,
                isScores: true
            };

            return cell;
        });

        cols.unshift({
            text: player,
            isLeft: true,
            isBottom: pIndex === state.players.length - 1
        });

        return { cols };
    });

    rows.push(...pRows);

    return rows;
}

function prepareFinalResults(state) {
    return state.players.map((player, index) => {
        return {
            name: player,
            scores: sum(state.frames.map((frame) => frame[index].total))
        };
    }).sort(function (a, b) {
        return b.scores - a.scores;
    });
}

function prepareView(state) {
    state.rows = prepareRows(state);
    state.finalResults = prepareFinalResults(state);

    return state;
}

function sum(arr) {
    return arr.reduce((acc, val) => {
        return acc + parseInt(val || 0, 10);
    }, 0);
}

function nextPlayer(state) {
    if (isLastFrame(state) && isLastPlayer(state)) {
        state.theEnd = true;
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
    if (state.theEnd) {
        return state;
    }

    let frame = state.frames[state.currentFrame][state.currentPlayer];
    let pins = FRAMES_LENGTH;

    if (frame[0] && pins !== frame[0].value) {
        pins -= frame[0].value;
    }

    let bonusFrames = getBonusFrames(state);
    let value = Math.max(throwBall(pins), throwBall(pins));

    bonusFrames.forEach((frame) => {
        frame.total += value;
    });

    let roll = { value };

    frame.push(roll);

    let rollsSum = sum(frame.map(roll => roll.value));
    frame.total = rollsSum;

    if (frame.length === 1) {
        if (roll.value === 10) {
            roll.title = 'X';

            if (!isLastFrame(state)) {
                nextPlayer(state);
            }
        } else {
            roll.title = roll.value;
        }
    } else if (frame.length === 2) {
        if (frame.total === 10) {
            roll.title = '/';
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

    state.lastResult = value;

    return state;
}

function onUpdatePlayerName(state, data) {
    state.players[data.index] = data.value;

    return state;
}

function onPlayGame(state) {
    return getInitialState(state.players);
}

function reducerCreate(types) {
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

        return prepareView(state);
    }
}

export default reducerCreate;
