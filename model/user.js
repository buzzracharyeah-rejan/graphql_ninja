const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  age: {
    type: Number,
    required: [true, 'age is required'],
  },
  married: {
    type: Boolean,
    required: [true, 'married status is required'],
  },
  posts: {
    type: [mongoose.Types.ObjectId],
    ref: 'Post',
  },
  comments: {
    type: [mongoose.Types.ObjectId],
    ref: 'Comment',
  },
});

userSchema.index({ name: 'text' });

const User = mongoose.model('User', userSchema);
export default User;
