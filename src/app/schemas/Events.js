import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  date_start: { type: Date, required: true },
  date_finishd: { type: Date, required: true },
  local: { type: String, required: true },
  part_id: { type: Number, required: true },
  tags: { type: Object, required: true },
  description: { type: String, required: true },
});

export default mongoose.model('Event', EventSchema);
