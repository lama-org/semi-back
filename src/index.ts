import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    releaseDate: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: '아프리카 청춘이다',
    releaseDate: '2010-02-20',
  },
  {
    title: '94년생 김우석',
    releaseDate: '2020-09-11',
  },

];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
