const restful = require('node-restful')
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    mail: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);