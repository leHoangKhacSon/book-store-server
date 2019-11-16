const Post = require('../../models/post.model');

module.exports.index = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
}