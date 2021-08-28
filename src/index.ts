import dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';
import MovieAPI from './api/movie';
import TvAPI from './api/tv';
import express from 'express';

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

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
    );
    next();
  });

  server.applyMiddleware({ app });

  await new Promise((r: any) => app.listen({ port: PORT }, r));

  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer().then();
