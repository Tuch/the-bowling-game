function getInitialState () {
    return {
        name: 'game-form',
        style: 'green',
        isOpen: true
    };
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
            case types.NEW_GAME:
                state.isOpen = true;
            break;
        }

        return state;
    }
}

export default reducerCreate;
