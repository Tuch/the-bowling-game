import { sumArray } from 'helpers';

function createFinalResultsData (state) {
    let game = state.game;

    return game.players.map((player, index) => {
        return {
            name: player,
            scores: sumArray(game.frames.map((frame) => frame[index].total))
        };
    }).sort(function (a, b) {
        return b.scores - a.scores;
    });
}

function createFinalResultsState(state, isOpen = true) {
    return {
        name: 'final-results',
        style: 'blue',
        isOpen,
        data: createFinalResultsData(state)
    }
}

function createGameFormData (state) {
    return state.game;
}

function createGameFormState(state, isOpen = true) {
    return {
        name: 'game-form',
        style: 'blue',
        isOpen,
        data: createGameFormData(state)
    }
}

function getInitialModal (state) {
    return createGameFormState(state);
}

function reducerCreate(types) {
    return function (state, action = {}) {
        state.modal = state.modal || getInitialModal(state);

        switch (action.type) {
            case types.CLOSE_MODAL:
                state.modal.isOpen = false;
            break;
            case types.PLAY_GAME:
                state.modal.isOpen = false;
            break;
            case types.END_GAME:
                state.modal = createFinalResultsState(state);
            break;
            case types.NEW_GAME:
                state.modal = createGameFormState(state);
            break;
        }

        return state;
    }
}

export default reducerCreate;
