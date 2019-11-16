const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  trend: {
    type: String,
    required: true
  },
  hashtag: {
    type: String,
    required: true
  },
  tweetCount: {
    type: Number,
    required: true
  }
});

const Trend = mongoose.model('Trend', trendSchema, 'trends');

module.exports = Trend;