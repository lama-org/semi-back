import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';
import { getMovieDetail, getNowPlaying, getPopular, getTopRated, getUpcoming } from '../api/movie/movie-api';

const resolvers = {
  Query: {
    movie_detail: async (_, { id }: { id: number }) => {
      const { data } = await getMovieDetail(id);
      return data;
    },
    now_playing: async (_, { page, region }: { page: number, region: string }) => {
      const { data } = await getNowPlaying(page, region);
      return data;
    },
    moviePopular: async (_, { page, region }: { page: number, region: string }) => {
      const { data } = await getPopular(page, region);
      return data;
    },
    top_rated: async (_, { page, region }: { page: number, region: string }) => {
      const { data } = await getTopRated(page, region);
      return data;
    },
    upcoming: async (_, { page, region }: { page: number, region: string }) => {
      const { data } = await getUpcoming(page, region);
      return data;
    },
  } as IObjectTypeResolver,
};

export default resolvers;
