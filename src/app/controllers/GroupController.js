import Group from '../schemas/Group';
import User from '../schemas/User';

module.exports = {
    async store(req, res){
        const { name, interests } = req.body
        const  user_id = req.headers

        const group = await Group.create({
            name: name,
            interests,
            admin_id: user_id
        })
        return res.status(201).json(group)
     },

     async show(req, res){
        const { group_id } = req.body;
        //@todo verificar se é membro ou admin
        
        let group = await Group.findById({group_id})
        

        if(group.lenght < 0){
            return res.status(404).json({error: 'Group does not exists!'})            
        }else{
            return res.json(200).json(group)
        }
     },

     async match_groups(req, res){

        const { user_id, location  } = req.body;

        var miles = 18;
        var location = [
            7.0398232,
            4.8492161
        ];

        const test = Group.find({
            'adress.location': {
                $geoWithin: {
                    $centerSphere: [
                        location,
                        miles / 3963.2
                    ]
                }
            }
        })

        return res.json(test)

        let user = await User.findById({user_id}) 
        const interests = user.interests
        let group = await Group.findById({_id})    
        

        
        if(group.lenght < 0){
            return res.status(404).json({error: 'Group does not exists!'})            
        }else{
            return res.json(200).json(group)
        }
     },

     async update(req, res){
        const { group_id, members } = req.body

//validar se a lista de usuarios nao esta no gurupo

if(mongoose.Types.ObjectId.isValid(group_id)) {
    Group.findByIdAndUpdate(group_id,{$set:{
        members: members.split(',').map(member => tech.trim()),
    }},{new:true})
    .then((docs)=>{ 
       if(docs) {
        return res.status(202).json({error: 'Group updated'})
       } else {
        return res.status(404).json({error: 'No such group exist', docs})
       }
    }).catch((err)=>{
        return res.status(400).json(err)})
    } else {
      return res.status(400).json({error: 'Provide correct key'}, docs)
    }
    },



    async destoy(req, res){

    }

}
