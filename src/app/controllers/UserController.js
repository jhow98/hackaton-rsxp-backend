import User from '../schemas/User'
//index, show, store, update, destroy

class UserController {
    async store(req, res){
       const { mail, name } = req.body;

       let user = await User.findOne({email})

       if(!user){
        user = await User.create({ email });
      }
       return res.json(user);
    }
}

export default UserController