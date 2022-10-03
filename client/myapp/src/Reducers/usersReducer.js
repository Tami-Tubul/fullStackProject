import authService from "../Utilities/authService"

let initialState = {
    users: [],
   // connectedUser: authService.getUser()
    connectedUser: {userName:"Admin" , password:"1qaz2wsx"},
}

function usersReducer(state = initialState, action) {

    switch (action.type) {

        case "CONNECTED_USER":
            return { ...state, connectedUser: action.payload} //connectedUser - all user details

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