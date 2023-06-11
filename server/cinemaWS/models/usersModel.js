const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    }
})

module.exports = mongoose.model('users', userSchema)


