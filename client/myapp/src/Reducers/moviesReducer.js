function moviesReducer(state = {movies: [] }, action) {

    switch (action.type) {

        case "LOAD_MOVIES":
            return { ...state, movies: action.payload }

        case "ADD_MOVIE":
            return {...state , movies: [...state.movies , action.payload]}    

        case "UPDATE_MOVIE":
            let id = action.payload._id
            let arr = [...state.movies]
            let index = arr.findIndex(x => x._id == id)
            if (index > -1) {
                arr[index] = action.payload
            }
            return { ...state, movies: arr }

        case "DELETE_MOVIE":
            let d_id = action.payload;
            let d_arr = [...state.movies]
            let d_index = d_arr.findIndex(x => x._id == d_id)
            if(d_index > -1) {
                d_arr.splice(d_index,1)
            }
            return {...state , movies : d_arr}


        default:
            return state;

    }


}

export default moviesReducer;