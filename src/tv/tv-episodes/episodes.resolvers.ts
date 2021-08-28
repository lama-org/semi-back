import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { ApolloContext } from '../../types';

const resolvers = {
  Query: {
    tv_episode_detail: async (
      _,
      { id, season, episode },
      {
        dataSources: {
          tvAPI: { getTvEpisodesDetail },
        },
      },
    ) => await getTvEpisodesDetail(id, season, episode),
  } as IObjectTypeResolver<any, ApolloContext, { id: number; season: number; episode: number }>,
};

export default resolvers;
