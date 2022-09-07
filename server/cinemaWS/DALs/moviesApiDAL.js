const axios = require("axios")

const getMovies = () => {
    return axios.get("http://localhost:4000/api/movies")
   
}

const getMovieByID = (id) => {
    return axios.get("http://localhost:4000/api/movies/" + id)
    
}

const addMovie = (obj) => {
    return axios.post("http://localhost:4000/api/movies", obj)
   
}

const updateMovie = (id, obj) => {
    return axios.put("http://localhost:4000/api/movies/" + id, obj)
    
}

const deleteMovie = (id) => {
    return axios.delete("http://localhost:4000/api/movies/" + id)
    
}

module.exports = { getMovies, getMovieByID, addMovie, updateMovie, deleteMovie }