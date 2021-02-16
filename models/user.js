const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        default: false
    }

})

const User = mongoose.model('User', userSchema)

module.exports =  User