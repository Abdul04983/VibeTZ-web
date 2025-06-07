import Post from "../models/Post.js";

export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post.likes.includes(req.user.id)) {
      post.likes.push(req.user.id);
      await post.save();
    }
    res.status(200).json({ message: "Post liked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const unlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    post.likes = post.likes.filter(id => id.toString() !== req.user.id);
    await post.save();
    res.status(200).json({ message: "Post unliked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
