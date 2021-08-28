import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { ApolloContext } from '../../types';

const resolvers = {
  Query: {
    tv_detail: async (_, { id }, { dataSources: { tvAPI } }) => await tvAPI.getTvDetail(id),
  } as IObjectTypeResolver<any, ApolloContext, { id: number }>,
};

export default resolvers;
