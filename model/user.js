const mongoes = require('mongoose');

const userSchema = mongoes.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    isAdmin:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const userModel = mongoes.model('users', userSchema);

module.exports = userModel;