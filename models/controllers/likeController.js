const Like = require('../models/Like');

// Like a post
exports.likePost = async (req, res) => {
  try {
    const alreadyLiked = await Like.findOne({ user: req.user.id, post: req.body.postId });
    if (alreadyLiked) return res.status(400).json({ message: 'Already liked' });

    const like = new Like({ user: req.user.id, post: req.body.postId });
    await like.save();
    res.status(201).json(like);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    await Like.findOneAndDelete({ user: req.user.id, post: req.body.postId });
    res.json({ message: 'Unliked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
