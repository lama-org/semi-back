import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';

const allTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.*`);
const allResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.*`);

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

export default makeExecutableSchema({ typeDefs, resolvers });
