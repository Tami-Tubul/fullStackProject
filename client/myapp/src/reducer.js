function appReducer(state = {}, action) {

    switch (action.type) {

        case "LOGIN":
            return { ...state, loginUser: action.payload }

        default:
            return state;

    }


}

export default appReducer;