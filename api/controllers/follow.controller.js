const Follow = require('../../models/follow.model');

module.exports.index = async (req, res) => {
  const follows = await Follow.find();
  res.json(follows);
}