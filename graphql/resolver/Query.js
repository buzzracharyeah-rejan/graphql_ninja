const Query = {
  users: async (parent, args, { User }, info) => {
    return await User.find();

    // return await User.aggregate([
    //   {
    //     $match: { $text: { $search: args.query } },
    //   },
    //   {
    //     $project: {
    //       __v: 0,
    //     },
    //   },
    // ]);
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
  },
};

export default Query;
