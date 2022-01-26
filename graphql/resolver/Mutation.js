const { v4: uuidv4 } = require('uuid');
const Mutation = {
  createUser: async (parent, args, { User }, info) => {
    const { name, email, age, married } = args;
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('email already exists');

    const user = new User({ name, email, age, married });
    await user.save();
    return user;
  },
  createPost: async (parent, args, { Post }, info) => {
    const { title, body, author } = args;

    const existingPost = await Post.findOne({ title });
    if (existingPost) throw new Error('post already exists');

    const post = new Post({ title, body, author });
    await post.save();

    return post;
  },
};
export default Mutation;
