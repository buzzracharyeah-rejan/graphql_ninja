const User = {
    posts(parent, args, { db }, info) {
        console.log(parent);
        console.log(db.posts);
        return db.posts.filter((post) => post.author === parent.id);
      },
      comments(parent, args, { db }, info) {
        return db.comments.filter((comment) => comment.author === parent.id);
      },
}

export default User; 