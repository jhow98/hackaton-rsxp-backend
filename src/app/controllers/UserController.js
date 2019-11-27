import User from '../schemas/User';

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({email})

        if(user){
         return res.status(302).json({error: 'User already exists!'})
        }else{
            user = await User.create(req.body);
        }
        return res.status(201).json(user)
     },

     async show(req, res){
        const  {user_id}  = req.params;

        const user = await User.findById(user_id)

        if(!user){
            return res.status(404).json({error: 'User does not exists!'})
           }else{
            return res.status(200).json(user)
           }
     },
     async update(req, res){



    },
    async destoy(req, res){

    }

}
