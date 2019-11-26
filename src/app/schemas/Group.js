const restful = require('node-restful')
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    description: { type: String, required: true },
    validate: { type: Date, required: true },
    level_dificult: {type: Number, require: true}
});

module.exports = mongoose.model('User', UserSchema);