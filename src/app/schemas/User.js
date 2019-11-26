const restful = require('node-restful')
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },   
    interest: {type: String, required: true},
    skis: {type: String, required: true},
    email: { type: String, required: true },
    hash_password: { type: String, required: true },
    xp: {type: Number, default: 0},
    is_senior: { type: Boolean, default: false },
});

export default mongoose.model('User', UserSchema);