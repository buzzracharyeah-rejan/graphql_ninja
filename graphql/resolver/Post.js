const Post = {
  author: async (parent, args, { User }, info) => {
    console.log(parent);
    return await User.findById({ _id: parent.author });
  },
  comments(parent, args, { db }, info) {
    return db.comments.filter((comment) => comment.post === parent.id);
  },
};

export default Post;
