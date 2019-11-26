import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const { email, name, password } = req.body;

    let user = await User.findOne({ email });

    if (user.lenght > 0) {
      return res.status(400).json({ error: 'User already exists!' });
    }
    user = await User.create({ email, name, password });

    return res.status(200).json(user);
  }
}

export default UserController;
