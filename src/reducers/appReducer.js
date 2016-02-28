import * as types from './types';
import modalReducerCreater from './modalReducerCreater';
import gameReducerCreater from './gameReducerCreater';

let modalReducer = modalReducerCreater(types);
let gameReducer = gameReducerCreater(types);

function createTable (state) {
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
                isScores: true,
                isCurrent: pIndex === state.currentPlayer
            };

            return cell;
        });

        cols.unshift({
            text: player,
            isLeft: true,
            isBottom: pIndex === state.players.length - 1,
            isCurrent: pIndex === state.currentPlayer
        });

        return {
            isCurrent: pIndex === state.currentPlayer,
            cols
        };
    });

    rows.push(...pRows);

    return { rows };
}

function reducer(state = {}, action = {}) {
    state.game = gameReducer(state.game, action);

    switch (action.type) {
        case types.DEBUG_MODE:
            state.isDebugMode = !state.isDebugMode;
        break;
        default:
            state.table = createTable(state.game);
        break;
    }

    state = modalReducer(state, action);

    return state;
}

export default reducer;
