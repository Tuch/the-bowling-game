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

function getInitialModal (state) {
    let modal = createGameFormState();
    modal.isOpen = true;
    modal.data = state.game;

    return modal;
}

function reducerCreate(types) {
    return function (state, action = {}) {
        let modal = state.modal = state.modal || getInitialModal(state);

        switch (action.type) {
            case types.CLOSE_MODAL:
                modal.isOpen = false;
            break;
            case types.PLAY_GAME:
                modal.isOpen = false;
            break;
            case types.END_GAME:
                modal.data = state.game;
                modal.isOpen = true;
            break;
            case types.NEW_GAME:
                modal.data = state.game;
                modal.isOpen = true;
            break;
        }

        return state;
    }
}

export default reducerCreate;
