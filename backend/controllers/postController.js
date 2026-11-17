const Post = require("../models/postModel");
const User = require("../models/userModel");

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
      author: req.user.id
    });

    await User.findByIdAndUpdate(
      req.user.id,
      { $push: { posts: post._id } }
    );

    const populatedPost = await Post.findById(post._id)
      .populate("author", "name email");

    res.status(201).json(populatedPost);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get logged-in user's posts
exports.getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      author: req.user.id
    })
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single post
exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "name email");

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.json(post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
      author: req.user.id
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found or unauthorized"
      });
    }

    post.title = req.body.title ?? post.title;
    post.content = req.body.content ?? post.content;

    await post.save();

    await post.populate("author", "name email");

    res.json(post);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      author: req.user.id
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found or unauthorized"
      });
    }

    await User.findByIdAndUpdate(
      req.user.id,
      { $pull: { posts: post._id } }
    );

    res.json({ message: "Post deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};