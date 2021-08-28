import MovieAPI from './api/movie';
import TvAPI from './api/tv';

export interface ApolloContext {
  dataSources: DataSources;
}

export interface DataSources {
  movieAPI: MovieAPI;
  tvAPI: TvAPI;
}
