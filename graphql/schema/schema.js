const { gql } = require('apollo-server-express');
export const typeDefs = gql`
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments(query: String): [Comment!]!
    me: User!
    post: Post!
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int!, married: Boolean!): User!
    createPost(title: String!, body: String!, author: ID!): Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    married: Boolean
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`;
