const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  body: {
    type: String,
    required: [true, 'body is required'],
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  comments: {
    type: [mongoose.Types.ObjectId],
    ref: 'Comment',
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
