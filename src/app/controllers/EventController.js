import Event from '../schemas/Event';
import User from '../schemas/User';
import Group from '../schemas/Group';

class EventController {
  async store(req, res) {
    const {
      name,
      date_start,
      date_finished,
      local,
      tags,
      description,
    } = req.body;

    const { user_id } = req.params;

    const event = await new Event({
      name,
      date_start,
      date_finished,
      admin_id: user_id,
      local,
      tags,
      description,
    });
    event.save(err => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(event);
    });
  }

  async show(req, res) {
    Event.findById(req.params.event_id, (err, event) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(event);
    });
  }

  async match_event(req, res) {
    const { event_id, tags } = req.body;

    const miles = 18; // determina o raio de alcance maximo de 30km
    const location = [7.0398232, 4.8492161];

    const test = Event.find({
      'adress.location': {
        $geoWithin: {
          $centerSphere: [
            location,
            miles / 3963.2, //
          ],
        },
      },
    });

    return res.json(test);

    const user = await User.findById({ user_id });
    const { interests } = user;
    const group = await Group.findById({ _id });

    if (group.lenght < 0) {
      return res.status(404).json({ error: 'Event does not exists!' });
    }
    return res.json(200).json(group);
  }

  async update(req, res) {
    const { event_id, part_id } = req.body;

    // @todo: validar se a lista de usuarios nao esta no gurupo

    Event.findByIdAndUpdate(
      event_id,
      {
        $set: {
          part_id,
        },
      },
      { new: true }
    )
      .then(docs => {
        if (docs) {
          return res.status(202).json({ error: 'Group add to Event' });
        }
        return res.status(404).json({ error: "Event doesn't exist", docs });
      })
      .catch(err => {
        return res.status(400).json(err);
      });
  }

  async destroy(req, res) {
    Event.findByIdAndRemove(req.body.event_id, (err, event) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json(event);
    });
    return res.status(200);
  }
}

export default new EventController();
