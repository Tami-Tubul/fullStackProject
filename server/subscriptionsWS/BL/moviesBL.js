const moviesWS_Dal = require("../DALs/moviesWS_DAL");
const moviesModel = require("../models/moviesModel")

const loadMoviesToMongoDB = async () => {
    moviesModel.count(async function (err, count) {
        if (!err && count === 0) {
            let resp = await moviesWS_Dal.getMovies()
            let allMovies = resp.data;
            let moviesDB = allMovies.map(x => {
                return { name: x.name, genres: x.genres, image: x.image.medium, premiered: x.premiered }
            })

            moviesModel.insertMany(moviesDB, function (err, docs) {
                if (err) {
                    throw err;
                }
                else {
                    console.log("data inserted!")
                }
            })

        }
    })
}

const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        moviesModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getMovieByID = (id) => {
    return new Promise((resolve, reject) => {
        moviesModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const addMovie = (obj) => {
    return new Promise((resolve, reject) => {
        let movie = moviesModel({
            name: obj.name,
            genres: obj.genres,
            image: obj.image,
            premiered: obj.premiered
        })
        movie.save(function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve({message :"created!" , movieID: movie._id})
            }
        })
    })
}

const updateMovie = (id, obj) => {
    return new Promise((resolve, reject) => {
        moviesModel.findByIdAndUpdate(id,
            {
                name: obj.name,
                genres: obj.genres,
                image: obj.image,
                premiered: obj.premiered
            }
            , function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("updated!")
                }
            })
    })
}

const deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        moviesModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("deleted!")
            }
        })
    })
}




module.exports = { loadMoviesToMongoDB, getAllMovies, getMovieByID, addMovie, updateMovie, deleteMovie }
