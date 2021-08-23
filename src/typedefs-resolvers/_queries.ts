const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;
export {}