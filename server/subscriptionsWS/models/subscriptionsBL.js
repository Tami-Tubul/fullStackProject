const subscriptionsModel = require("../DALs/subscriptionsModel")

const getAllSubscriptions = () => {
    return new Promise((resolve, reject) => {
        subscriptionsModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getSubscriptionByID = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionsModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const addSubscription = (obj) => {
    return new Promise((resolve, reject) => {
        subscriptionsModel.save(obj, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("created!")
            }
        })
    })
}

const updateSubscription = (id, obj) => {
    return new Promise((resolve, reject) => {
        subscriptionsModel.findByIdAndUpdate(id,obj, function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("updated!")
                }
            })
    })
}

const deleteSubscription = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionsModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("deleted!")
            }
        })
    })
}




module.exports = { getAllSubscriptions, getSubscriptionByID, addSubscription, updateSubscription, deleteSubscription }
