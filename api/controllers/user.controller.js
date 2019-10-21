const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
  const { email, password } = req.body;
  const findEmail = await User.findOne({email: email});
  if(findEmail) {
    res.status(410).send('email existed');
  }
  const newUser = new User({
    email, password
  });
  
  try {
    const saveNewUser = await newUser.save();
    res.status(200).send(saveNewUser);
  } catch (error) {
    res.status(410).send(err);
  }
}

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
  // find email exists in database yes or no
  const findUser = await User.findOne({email: email});
  if(!findUser) {
    res.status(404).send('email not exists');
  }
  // check password 

  // create token and payload data anh response
  const token = jwt.sign({ userId: findUser.id}, process.env.SECRET_KEY);
  res.status(200).json({
    userId: findUser.id,
    token: token
  })
  } catch (error) {
    res.status(404).send('invalid email and password', error);
  }

}