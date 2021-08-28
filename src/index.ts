import dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import MovieAPI from './api/movie';
import TvAPI from './api/tv';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      movieAPI: new MovieAPI(),
      tvAPI: new TvAPI(),
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
