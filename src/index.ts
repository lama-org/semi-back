import dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';
import MovieAPI from './api/movie';
import TvAPI from './api/tv';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4000;

async function startServer() {
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
  await server.start();

  const app = express();
  app.use(cors());

  server.applyMiddleware({ app });

  await new Promise((r: any) => app.listen({ port: PORT }, r));

  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer().then();
