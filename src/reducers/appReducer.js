import * as types from './types';
import { sumArray } from 'helpers';
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

    return { rows };
}

function createFinalResults (state) {
    return state.players.map((player, index) => {
        return {
            name: player,
            scores: sumArray(state.frames.map((frame) => frame[index].total))
        };
    }).sort(function (a, b) {
        return b.scores - a.scores;
    });
}

function getInitialState() {
    return { };
}

function reducer(state = getInitialState(), action = {}) {
    state.game = gameReducer(state.game, action);

    switch (action.type) {
        case types.END_GAME:
            state.finalResults = createFinalResults(state.game);
        break;
        default:
            state.table = createTable(state.game);
        break;
    }

    state = modalReducer(state, action);

    return state;
}

export default reducer;
