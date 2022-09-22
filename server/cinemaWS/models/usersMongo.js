const usersModel = require("../DALs/usersModel")

const getUsersFromMongo = () => {
    return new Promise((resolve, reject) => {
        usersModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getUserFromMongo = (userName,password) => {
    return new Promise((resolve, reject) => {
        usersModel.findOne({
            userName: userName,
            password: password
        }, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const addUserToMongo = (obj) => {
    return new Promise((resolve, reject) => {
        let user = usersModel({
            userName: obj.userName,
            password: obj.password
        })
        user.save(function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("created!")
            }
        })
    })
}

const updateUserOnMongo = (id, obj) => {
    return new Promise((resolve, reject) => {
        usersModel.findByIdAndUpdate(id, {
            userName: obj.userName,
            password: obj.password
        }, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("updated!")
            }
        })
    })
}

const deleteUserFromMongo = (id) => {
    return new Promise((resolve, reject) => {
        usersModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("deleted!")
            }
        })
    })
}
module.exports = { getUsersFromMongo, getUserFromMongo, addUserToMongo, updateUserOnMongo, deleteUserFromMongo }