const moviesApiDal = require("../DALs/moviesApiDAL")

const getAllMovies = async () => {
    let resp = await moviesApiDal.getMovies()
    return resp.data;
}

const getMovieByID = async (id) => {
    let resp = await moviesApiDal.getMovieByID(id)
    return resp.data;
}

const addMovie = async (obj) => {
    let resp = await moviesApiDal.addMovie(obj)
    return resp.data;
}

const updateMovie = async (id, obj) => {
    let resp = await moviesApiDal.updateMovie(id, obj)
    return resp.data;
}

const deleteMovie = async (id) => {
    let resp = await moviesApiDal.deleteMovie(id)
    return resp.data;
}

module.exports = { getAllMovies, getMovieByID, addMovie, updateMovie, deleteMovie  }