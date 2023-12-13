const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModels');

exports.signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password , date_of_birth , city } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword ,
      date_of_birth ,
      city
    });

    res.status(201).json({ userId: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

    // Include user data in the response
    res.json({ token, user: { id: user.id, email: user.email, firstname: user.firstname, lastname: user.lastname } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
