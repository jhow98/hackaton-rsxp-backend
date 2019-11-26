const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  interest: { type: Object, default: null},
  skils: { type: String, default: null },
  email: { type: String, required: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 },
  is_senior: { type: Boolean, default: false },
});

export default mongoose.model('User', UserSchema);
