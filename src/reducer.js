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

    return pad(leftSide, 2) + ':' + pad(rightSide, 2);
}

function roll () {
    return Math.round(Math.random() * 10 % 10);
}

function throwBall () {
    //luck mode ;)
    return Math.max.apply(null, [roll(), roll(), roll()]);
}

function getInitialState () {
    return {
        players: [
            {
                name: 'Player 1',
                scores: []
            },
            {
                name: 'Player 2',
                scores: []
            }
        ],
        currentPlayer: 0,
        startTime: new Date(),
        diffTime: '00:00'
    };
}

let reducer = function (state, action = {}) {
    if (!state) {
        state = getInitialState();
    }

    switch (action.type) {
        case reducer.TICK_TIMER:
            state.diffTime = calcDiffTime(state);
        break;
        case reducer.THROW_BALL:
            state.players[state.currentPlayer].scores.push(throwBall());
            state.currentPlayer = state.currentPlayer === state.players.length - 1 ? 0 : state.currentPlayer + 1;
            state.diffTime = calcDiffTime(state);
        break;
    }

    return state;
}

export default reducer;

reducer.TICK_TIMER = 'TICK_TIMER';
reducer.THROW_BALL = 'THROW_BALL';
