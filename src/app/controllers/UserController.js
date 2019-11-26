import User from '../schemas/User';

module.exports = {
    async store(req, res){
        const { email, name, password, interests } = req.body;
 
        let user = await User.findOne({email})
 
        if(user.lenght > 0){
         return res.status(302).json({error: 'User already exists!'})
        }else{
            user = await User.create({ email, name, password, interests });
        }
        return res.status(201).json(user)
     },

     async show(req, res){
        const { user_id } = req.body;
        let user = await User.findOne({user_id})

        if(!user.lenght > 0){
            return res.status(404).json({error: 'User does not exists!'})            
           }else{
            return res.json(200).json(user)
           }
     },
     async update(req, res){

    },
    async destoy(req, res){

    }

}
