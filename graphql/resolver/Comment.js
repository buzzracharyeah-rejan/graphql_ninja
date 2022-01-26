const Comment = {
  author(parent, args, { db }, info) {
    return db.users.filter((user) => user.id === parent.author);
  },
  post(parent, args, { db }, info) {
    return db.posts.filter((post) => post.id === parent.post);
  },
};

export default Comment;
