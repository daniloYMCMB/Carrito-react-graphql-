const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

// import typeDefs from './schemas'
// import resolvers from './resolvers'
import models from './models'

// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type User {
//     _id: ID!
//     username: String!
//     password: String!
//   }

//   type Query {
//     allUsers: [User]!
//     getUser(_id: ID!): User!
//   }

//   type Mutation {
//     createUser(username: String!, password: String!): User!
//   }
// `;

// Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     allUsers: (parent, args, {models}) => models.User.find(),
//     getUser: (parent, args, {models}) => models.User.findOne(args),
//   },
//   Mutation: {
//     createUser: (parent, args, {models}) => models.User.create(args)
//   }
  
// };

//mezclar todos los archivos de carpetas de types y resolvers
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers/')));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const server = new ApolloServer({ 
  schema,
  context: {
    models,
    user: {
      _id: 1, username: 'Juan'
    }
  } 
});

const app = express();
server.applyMiddleware({ app });

mongoose.connect('mongodb://localhost:27017/carrito', {useNewUrlParser: true}).then(
  () => {
    console.log('Conectado a Mongo!')
    app.listen({ port: 4001 }, () =>
      console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
    );
  }
)


