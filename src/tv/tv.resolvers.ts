import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { getAiringToday, getTopRated, getTvDetail, getPopular } from '../api/tv/tv-api';

const resolvers = {
  Query: {
    airing_today: async (_, { page }: { page: number }) => {
      const { data } = await getAiringToday(page);
      return data;
    },
    popular: async (_, { page }: { page: number }) => {
      const { data } = await getPopular(page);
      return data;
    },
    top_rate: async (_, { page }: { page: number }) => {
      const { data } = await getTopRated(page);
      return data;
    },
    tv_detail: async (_, { id }: { id: number }) => {
      const { data } = await getTvDetail(id);
      return data;
    },
  } as IObjectTypeResolver,
};

export default resolvers;
