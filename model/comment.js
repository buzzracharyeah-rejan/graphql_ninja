const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'text is required'],
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: 'Post',
  },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
