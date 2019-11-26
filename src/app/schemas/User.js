const restful = require('node-restful')
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    nome: { type: String, required: true },
    id: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);