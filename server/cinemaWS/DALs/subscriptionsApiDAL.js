const axios = require("axios")

const getSubscriptions = () => {
    return axios.get("http://localhost:4000/api/subscriptions")
}

const getSubscriptionByID = (id) => {
    return axios.get("http://localhost:4000/api/subscriptions/" + id)
    
}

const addSubscription = (obj) => {
    return axios.post("http://localhost:4000/api/subscriptions" + obj)
   
}

const updateSubscription = (id, obj) => {
    return axios.put("http://localhost:4000/api/subscriptions/" + id, obj)
    
}

const deleteSubscription = (id) => {
    return axios.delete("http://localhost:4000/api/subscriptions/" + id)
   
}

module.exports = { getSubscriptions, getSubscriptionByID, addSubscription, updateSubscription, deleteSubscription }