function subscriptionsReducer(state = { members: [] }, action) {

    switch (action.type) {

        case "LOAD_MEMBERS":
            return { ...state, members: action.payload }

            case "ADD_MEMBER":
                return {...state , members: [...state.members , action.payload]}    

            case "UPDATE_MEMBER":
                let id = action.payload._id
                let arr = [...state.members]
                let index = arr.findIndex(x => x._id == id)
                if (index > -1) {
                    arr[index] = action.payload
                }
                return { ...state, members: arr }

            case "DELETE_MEMBER":
                let d_id = action.payload;
                let d_arr = [...state.members]
                let d_index = d_arr.findIndex(x => x._id == d_id)
                if(d_index > -1) {
                    d_arr.splice(d_index,1)
                }
                return {...state , members : d_arr}


            default:
                return state;

    }


}

export default subscriptionsReducer;