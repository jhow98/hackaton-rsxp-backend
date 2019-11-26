const User = require('../schemas/User')
//index, show, store, update, destroy

module.exports = {
    async store(req, res){
       const { mail, name } = req.body;

       let user = await User.findOne({email})

       if(!user){
        user = await User.create({ email });
      }
       return res.json(user);
    }
}