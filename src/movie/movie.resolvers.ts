import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { ApolloContext } from '../types';

const resolvers = {
  Query: {
    now_playing: async (
      _,
      { page, region },
      {
        dataSources: {
          movieAPI: { getNowPlaying },
        },
      },
    ) => await getNowPlaying(page, region),
    moviePopular: async (
      _,
      { page, region },
      {
        dataSources: {
          movieAPI: { getPopular },
        },
      },
    ) => await getPopular(page, region),
    top_rated: async (
      _,
      { page, region },
      {
        dataSources: {
          movieAPI: { getTopRated },
        },
      },
    ) => await getTopRated(page, region),
    upcoming: async (
      _,
      { page, region },
      {
        dataSources: {
          movieAPI: { getUpcoming },
        },
      },
    ) => await getUpcoming(page, region),
  } as IObjectTypeResolver<any, ApolloContext, { page: number; region?: string }>,
};

export default resolvers;
