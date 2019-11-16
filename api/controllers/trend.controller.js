const Trend = require('../../models/trend.model');

module.exports.index = async (req, res) => {
  const trends = await Trend.find();
  res.json(trends);
}
