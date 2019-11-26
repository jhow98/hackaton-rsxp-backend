const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  interests: { type: String, required: true },
  id_admin: { type: Number, required: true },
  members: { type: Object },
  members_validate: { type: Object, default: null },
  group_validate: { type: Boolean, default: false },
  group_pontuation: { type: Number, default: 0 },
});

export default mongoose.model('Group', GroupSchema);
