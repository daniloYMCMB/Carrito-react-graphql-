const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import cors from 'cors'

import models from './models'

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
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
server.applyMiddleware({ app });

mongoose.connect('mongodb://localhost:27017/carrito', {useNewUrlParser: true}).then(
  () => {
    console.log('Conectado a Mongo!')
    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  }
)
