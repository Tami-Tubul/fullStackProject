let initialState = [
    {
        memberId: "6357e5b65cd3b7b8deaec029",
        movies: [{ movieId: "63724d84cbf7bc785019e8d2", date: "2013-06-24T00:00:00.000Z" },
        { movieId: "63724d84cbf7bc785019e8d3", date: "2011-09-22T00:00:00.000Z" },
        { movieId: "63724d84cbf7bc785019e8d4", date: "2014-01-11T00:00:00.000Z" },
        { movieId: "63724d84cbf7bc785019e8d6", date: "2014-01-12T00:00:00.000Z" }
        ]
    },
    {
        memberId: "6357e5b65cd3b7b8deaec02d",
        movies: [{ movieId: "63724d84cbf7bc785019e8d2", date: "2013-06-24T00:00:00.000Z" },
        { movieId: "63724d84cbf7bc785019e8d3", date: "2011-09-22T00:00:00.000Z" },
        { movieId: "63724d84cbf7bc785019e8d4", date: "2014-01-11T00:00:00.000Z" },
        { movieId: "63724d84cbf7bc785019e8d6", date: "2014-01-12T00:00:00.000Z" }
        ]
    }
]

function subscriptionsReducer(state = { members: [], subscriptions: initialState }, action) {

    switch (action.type) {

        case "LOAD_MEMBERS":
            return { ...state, members: action.payload }

        case "ADD_MEMBER":
            return { ...state, members: [...state.members, action.payload] }

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
            if (d_index > -1) {
                d_arr.splice(d_index, 1)
            }
            return { ...state, members: d_arr }


        default:
            return state;

    }


}

export default subscriptionsReducer;