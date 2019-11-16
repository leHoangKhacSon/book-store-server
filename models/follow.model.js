const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
  avatarUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  tick: {
    type: Boolean,
    required: true
  },
  isShowCard: {
    type: Boolean,
    required: true
  },
  isFollow: {
    type: Boolean,
    required: true
  }
});

const Follow = mongoose.model('Follow', followSchema, 'follows');

module.exports = Follow;