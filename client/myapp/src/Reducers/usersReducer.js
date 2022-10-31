import authService from "../Utilities/authService"

let initialState = {
    users: [],
    connectedUser: authService.getUser()
}

function usersReducer(state = initialState, action) {

    switch (action.type) {

        case "CONNECTED_USER":
            return { ...state, connectedUser: action.payload } //connectedUser - all user details

        case "LOAD_USERS":
            return { ...state, users: action.payload }

        case "UPDATE_USER":
            let id = action.payload._id
            let arr = [...state.users]
            let index = arr.findIndex(x => x._id === id)
            if (index > -1) {
                arr[index] = action.payload
            }
            return { ...state, users: arr }

        case "DELETE_USER":
            let d_id = action.payload
            let d_arr = [...state.users]
            let d_index = d_arr.findIndex(x => x._id === d_id)
            if (d_index > -1) {
                d_arr.splice(d_index, 1)
            }
            return { ...state, users: d_arr }

        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] }


        default:
            return state;

    }


}

export default usersReducer;