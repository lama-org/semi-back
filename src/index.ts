import dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
