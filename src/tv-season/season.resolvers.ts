import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { getTvSeasonDetail } from '../api/tv/tv-api';

const resolvers = {
  Query: {
    tv_season_detail: async (_, { id, season}: { id: number, season: number}) => {
      const { data } = await getTvSeasonDetail(id, season);
      return data;
    },
  } as IObjectTypeResolver,
};

export default resolvers;
