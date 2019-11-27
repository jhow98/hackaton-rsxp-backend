const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  members: { type: Object, required: true },
  location: { type: Object, required: true },
});

export default mongoose.model('Group', GroupSchema);
