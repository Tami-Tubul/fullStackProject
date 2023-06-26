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
    role: {
        type: String,
        require: true,
        default: "user",
    }
})

module.exports = mongoose.model('users', userSchema)


