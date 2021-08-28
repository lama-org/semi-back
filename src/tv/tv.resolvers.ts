import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { ApolloContext } from '../types';

const resolvers = {
  Query: {
    airing_today: async (_, { page }, { dataSources: { tvAPI } }) => await tvAPI.getAiringToday(page),
    popular: async (_, { page }, { dataSources: { tvAPI } }) => await tvAPI.getPopular(page),
    top_rate: async (_, { page }, { dataSources: { tvAPI } }) => await tvAPI.getTopRated(page),
  } as IObjectTypeResolver<any, ApolloContext, { page: number }>,
};

export default resolvers;
