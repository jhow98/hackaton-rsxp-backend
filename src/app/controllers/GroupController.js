import Group from '../schemas/Group';
import User from '../schemas/User';

class GroupController {
  async store(req, res) {
    const { name, members, user_id, location, thema } = req.body;

    const group = await new Group({
      name,
      admin_id: user_id,
      members,
      location,
      thema,
    });
    group.save(err => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(group);
    });
  }

  async show(req, res) {
    Group.findById(req.params.group_id, (err, group) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(group);
    });
  }

  async match_groups(req, res) {
    const { user_id, location } = req.body;

    const miles = 18;
    // var location = [
    //     7.0398232,
    //     4.8492161
    // ];

    const test = Group.find({
      'adress.location': {
        $geoWithin: {
          $centerSphere: [location, miles / 3963.2],
        },
      },
    });

    return res.json(test);

    const user = await User.findById({ user_id });
    const { interests } = user;
    const group = await Group.findById({ _id });

    if (group.lenght < 0) {
      return res.status(404).json({ error: 'Group does not exists!' });
    }
    return res.json(200).json(group);
  }

  async update(req, res) {
    const { group_id, members } = req.body;

    // @todo: validar se a lista de usuarios nao esta no gurupo

    Group.findByIdAndUpdate(
      group_id,
      {
        $set: {
          members,
        },
      },
      { new: true }
    )
      .then(docs => {
        if (docs) {
          return res.status(202).json({ error: 'Group updated' });
        }
        return res.status(404).json({ error: 'No such group exist', docs });
      })
      .catch(err => {
        return res.status(400).json(err);
      });
  }

  async destroy(req, res) {
    Group.findByIdAndRemove(req.body.group_id, (err, group) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json(group);
    });
    return res.status(200);
  }
}

export default new GroupController();
