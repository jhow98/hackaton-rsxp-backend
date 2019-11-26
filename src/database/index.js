
import mongoose from 'mongoose';

<<<<<<< HEAD:src/app/database/index.js
mongoose.connect(process.env.MONGO_URL || 'mongodb//mongodb://127.0.0.1:27017/mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
=======
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongoConnection = mongoose.connect("mongodb://localhost:27017/ittome", {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}
export default new Database();
>>>>>>> 7a7da87ccf091511294a03c76d0952a20d250bba:src/database/index.js
