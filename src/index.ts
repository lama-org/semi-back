const { ApolloServer } = require('apollo-server');
const schema = require('./config/schema');
const TvAPI = require('./api/tv/tv-api');

require('dotenv').config();

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    TvAPI: new TvAPI(),
  }),
});

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
