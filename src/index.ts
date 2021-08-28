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

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
