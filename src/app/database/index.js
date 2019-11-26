import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL || 'mongodb//mongodb://127.0.0.1:27017/mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})