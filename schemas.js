export default `
    type Query{
        holaMundo: String
    }
`;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;