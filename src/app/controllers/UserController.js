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
        User.findById(req.params.user_id, (err, user) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(user)
        });
     },

     async update(req, res){
         
    },

    async destoy(req, res){
        User.findByIdAndRemove(req.params.user_id, (err, user) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json("User successfully deleted!");
        });
    }

}
