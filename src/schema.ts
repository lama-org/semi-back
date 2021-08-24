import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

const allTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.ts`);
const allResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.ts`);

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

export { typeDefs, resolvers };
