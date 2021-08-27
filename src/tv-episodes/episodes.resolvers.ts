import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { getTvEpisodesDetail } from '../api/tv/tv-api';

const resolvers = {
  Query: {
    tv_episode_detail: async (_, { id, season, episode}: { id: number, season: number, episode: number}) => {
      const { data } = await getTvEpisodesDetail(id, season, episode);
      return data;
    },
  } as IObjectTypeResolver,
};

export default resolvers;
