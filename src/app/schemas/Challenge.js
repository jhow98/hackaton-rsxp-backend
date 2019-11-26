import mongoose from 'mongoose';

const ChallengSchema = new mongoose.Schema({
  date_start: { type: Date, required: true },
  date_finishd: { type: Date, required: true },
  local: { type: String, required: true },
  tags: { type: Object, required: true },
  description: { type: String, required: true },
  id_admin: { type: Number, required: true, ref: 'User' },
});

export default mongoose.model('Challeng', ChallengSchema);
