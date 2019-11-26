const restful = require('node-restful')
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    is_senior: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', UserSchema);