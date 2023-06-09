const subscriptionsApiDal = require("../DALs/subscriptionsApiDAL")

const getAllSubscriptions = async () => {
    let resp = await subscriptionsApiDal.getSubscriptions()
    return resp.data;
}

const getSubscriptionByID = async (id) => {
    let resp = await subscriptionsApiDal.getSubscriptionByID(id)
    return resp.data;
}

const addSubscription = async (obj) => {
    let resp = await subscriptionsApiDal.addSubscription(obj)
    return resp.data;
}

const updateSubscription = async (id, obj) => {
    let resp = await subscriptionsApiDal.updateSubscription(id, obj)
    return resp.data;
}

const deleteSubscription = async (id) => {
    let resp = await subscriptionsApiDal.deleteSubscription(id)
    return resp.data;
}

module.exports = { getAllSubscriptions, getSubscriptionByID, addSubscription, updateSubscription, deleteSubscription }