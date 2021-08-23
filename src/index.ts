import { ApolloServer } from 'apollo-server';
import TvAPI from './api/tv/tv-api';
import { schema } from './schema';

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    TvAPI: new TvAPI(),
  }),
});

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
