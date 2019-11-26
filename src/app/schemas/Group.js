const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  themes: { type: String, required: true },
  description: { type: String, required: true },
  validate: { type: Date, required: true },
  level_dificult: { type: Number, require: true },
  id_user: { type: Number, required: true },
});

export default mongoose.model('Group', GroupSchema);
