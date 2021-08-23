const { ApolloServer } = require('apollo-server')
import schema from "./config/schema";


const server = new ApolloServer({ schema });

server.listen().then(({ url }:any) => {
  console.log(`🚀  Server ready at ${url}`);
});
