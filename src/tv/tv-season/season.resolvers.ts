import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { ApolloContext } from '../../types';

const resolvers = {
  Query: {
    tv_season_detail: async (
      _,
      { id, season },
      {
        dataSources: {
          tvAPI: { getTvSeasonDetail },
        },
      },
    ) => await getTvSeasonDetail(id, season),
  } as IObjectTypeResolver<any, ApolloContext, { id: number; season: number }>,
};

export default resolvers;
