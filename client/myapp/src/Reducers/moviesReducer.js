function moviesReducer(state = {movies: [] }, action) {

    switch (action.type) {

        case "LOAD_MOVIES":
            return { ...state, movies: action.payload }

        case "UPDATE_MOVIE":
            let id = action.payload._id
            let arr = [...state.movies]
            let index = arr.findIndex(x => x._id === id)
            if (index > -1) {
                arr[index] = action.payload
            }
            return { ...state, movies: arr }

        default:
            return state;

    }


}

export default moviesReducer;