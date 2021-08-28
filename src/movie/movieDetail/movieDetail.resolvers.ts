import { ApolloContext } from '../../types';
import { IObjectTypeResolver } from '@graphql-tools/utils/Interfaces';

const resolvers = {
  Query: {
    movie_detail: async (
      _,
      { id },
      {
        dataSources: {
          movieAPI: { getMovieDetail },
        },
      },
    ) => await getMovieDetail(id),
  } as IObjectTypeResolver<any, ApolloContext, { id: number }>,
};

export default resolvers;
