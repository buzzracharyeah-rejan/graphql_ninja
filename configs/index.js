const uri =
  process.env.ATLAS_URI ||
  'mongodb+srv://varbuzz:beamoflight@cluster0.zzetb.mongodb.net/graphqlTest?retryWrites=true&w=majority';

module.exports = {
  dbConfig: {
    uri,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
