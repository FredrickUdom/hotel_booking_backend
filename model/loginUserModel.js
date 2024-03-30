const mongoes = require('mongoose');

const loginSchema = mongoes.Schema({
    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    }
});

const loginModel = mongoes.model('login', loginSchema);
module.exports = loginModel;
