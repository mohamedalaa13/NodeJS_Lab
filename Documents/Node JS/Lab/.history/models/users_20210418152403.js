const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    // DoB: Date,
    email: String,
})

const userModel = mongoose.model("User" , userSchema)

module.exports = userModel