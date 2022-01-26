import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import dotenv from 'dotenv';

import { dbConfig } from '../configs';
import { typeDefs } from '../graphql/schema/schema';
import { Query, User, Post, Comment, Mutation } from '../graphql/resolver';
import { User as UserModel, Post as PostModel, Comment as CommentModel } from '../model';

dotenv.config();

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      User,
      Post,
      Comment,
      Mutation,
    },
    context: {
      User: UserModel,
      Post: PostModel,
      Comment: CommentModel,
    },
  });

  // db connection
  mongoose
    .connect(dbConfig.uri, dbConfig.options)
    .then(() => console.log('db connection successful'))
    .catch((err) => {
      console.log(err);
      console.log(`db connection failed`);
    });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();
