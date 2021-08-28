import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import { createServer } from 'http';
import MovieAPI from './api/movie';
import TvAPI from './api/tv';

const PORT: string = process.env.PORT || '0';

async function startServer() {
  const app = express();

  const httpServer = createServer(app);

  const server = new ApolloServer({
    schema,
    introspection: true,
    dataSources: () => {
      return {
        movieAPI: new MovieAPI(),
        tvAPI: new TvAPI(),
      };
    },
  });
  await server.start();

  server.applyMiddleware({ app });

  httpServer.listen(parseInt(PORT), () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().then();
