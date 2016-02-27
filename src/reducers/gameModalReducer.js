function createFinalResultsState() {
    return {
        name: 'final-results',
        style: 'blue',
        isOpen: false
    }
}

function createGameFormState() {
    return {
        name: 'game-form',
        style: 'blue',
        isOpen: false
    }
}

function getInitialState () {
    let state = createGameFormState();
    state.isOpen = true;

    return state;
}

function reducerCreate(types) {
    return function (state = getInitialState(), action = {}) {
        switch (action.type) {
            case types.CLOSE_MODAL:
                state.isOpen = false;
            break;
            case types.PLAY_GAME:
                state.isOpen = false;
            break;
            case types.END_GAME:
                state = createFinalResultsState();
                state.isOpen = true;
            break;
            case types.NEW_GAME:
                state = createGameFormState();
                state.isOpen = true;
            break;
        }

        return state;
    }
}

export default reducerCreate;
