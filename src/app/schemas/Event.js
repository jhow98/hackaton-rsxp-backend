import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date_start: { type: Date, required: true },
  date_finished: { type: Date, required: true },
  local: { type: String, required: true },
  part_id: { type: Object },
  admin_id: { type: String, required: true },
  tags: { type: Object, required: true },
  description: { type: String, required: true },
  location: { type: Object, required: true },

});

export default mongoose.model('Event', EventSchema);
