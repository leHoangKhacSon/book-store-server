const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
  const { email, password } = req.body;
  const findEmail = await User.findOne({email: email});
  if(findEmail) {
    res.status(410).send('email existed');
    return;
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    email, 
    password: hashPassword
  });
  
  try {
    const saveNewUser = await newUser.save();
    const token = jwt.sign({ userId: saveNewUser.id }, process.env.SECRET_KEY);
    res.status(200).send({
      userId: saveNewUser.id,
      token
    });
  } catch (error) {
    res.status(410).send(error);
  }
}

module.exports.login = async (req, res) => {
  try {
  const { email, password } = req.body;
  // find email exists in database yes or no
  const findUser = await User.findOne({email: email});
  if(!findUser) {
    res.status(404).send('Email is not found');
  }
  // check password 
  const validPassword = await bcrypt.compare(password, findUser.password);
  if(!validPassword) {
    res.status(400).send('Invalid password')
  }
  // create token and payload data anh response
  const token = jwt.sign({ userId: findUser.id}, process.env.SECRET_KEY);
  res.status(200).json({
    userId: findUser.id,
    token: token
  })
  } catch (error) {
    res.status(400).send('Invalid email or password');
  }

}