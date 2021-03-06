const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: { type: Object, required: true },
  interests: { type: Object, required: true },
  subject: { type: String, required: true },
});

export default mongoose.model('Group', GroupSchema);