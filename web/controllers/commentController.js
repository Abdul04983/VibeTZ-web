import Post from "../models/Post.js";

export const addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const comment = {
      user: req.user.id,
      text: req.body.text,
      createdAt: new Date(),
    };
    post.comments.push(comment);
    await post.save();
    res.status(200).json({ message: "Comment added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    post.comments = post.comments.filter(c => c._id.toString() !== req.params.commentId);
    await post.save();
    res.status(200).json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
