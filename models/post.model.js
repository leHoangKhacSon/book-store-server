const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  avatarUrl: {
    type: String,
    required: true
  },
  isTick: {
    type: Boolean,
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
  time: {
    type: String,
    required: true
  },
  contentText: {
    type: String,
    required: true
  },
  contentImg: {
    type: String,
    required: true
  },
  comment: {
    type: Number,
    required: true
  },
  reTweet: {
    type: Number,
    required: true
  },
  like: {
    type: Number,
    required: true
  },
  isLike: {
    type: Boolean,
    required: true
  },
  infoCardShow: {
    type: Boolean,
    required: true
  },
  optionShow: {
    type: Boolean,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;