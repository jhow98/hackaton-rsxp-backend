const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  interests: { type: Object, required: true},
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
  members: { type: Object},
});

export default mongoose.model('Group', GroupSchema);
