const Comment = require('../models/Comment');

// Add comment to a post
exports.addComment = async (req, res) => {
  try {
    const comment = new Comment({
      user: req.user.id,
      post: req.body.postId,
      text: req.body.text,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all comments for a post
exports.getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate('user', 'username');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
