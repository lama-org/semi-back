import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { MovieDetail, MovieResult } from './movie';

export default class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/movie';
  }

  willSendRequest(request: RequestOptions): void {
    request.params.set('api_key', process.env.API_KEY || '');
    request.params.set('language', 'ko-KR');
  }

  getMovieDetail = async (id: number): Promise<MovieDetail> => await this.get(`/${id}`);

  getNowPlaying = async (page = 1, region?: string): Promise<MovieResult> =>
    await this.get('/now_playing', { page, region: region || '' });

  getPopular = async (page = 1, region?: string): Promise<MovieResult> =>
    await this.get('/popular', {
      page,
      region: region || '',
    });

  getTopRated = async (page = 1, region?: string): Promise<MovieResult> =>
    await this.get('/top_rated', {
      page,
      region: region || '',
    });

  getUpcoming = async (page = 1, region?: string): Promise<MovieResult> =>
    await this.get('/upcoming', {
      page,
      region: region || '',
    });
}
