const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    }
});

const UserModel = mongoose.model('User', userSchema, 'user');

module.exports = UserModel;
