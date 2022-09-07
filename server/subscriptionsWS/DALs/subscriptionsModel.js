const mongoose = require("mongoose")

let subscriptionSchema = new mongoose.Schema({
   memberId : Number,
   movies : [{movieId : Number , date : Date}]
})

module.exports = mongoose.model('subscriptions',subscriptionSchema)