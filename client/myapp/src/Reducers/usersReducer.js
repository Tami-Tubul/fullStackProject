function usersReducer(state = { loginUser: {}, users: [] }, action) {

    switch (action.type) {

        case "LOGIN_USER":
            return { ...state, loginUser: action.payload }

        case "LOAD_USERS":
            return { ...state, users: action.payload }

        case "UPDATE_USER":
            let id = action.payload._id
            let arr = [...state.users]
            let index = arr.findIndex(x => x._id === id)
            if (index > -1) {
                arr[index] = action.payload
            }
            return { ...state, users: arr, loginUser: action.payload }

        default:
            return state;

    }


}

export default usersReducer;