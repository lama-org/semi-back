import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export default class TvAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/tv';
  }

  willSendRequest(request: RequestOptions): void {
    request.params.set('api_key', process.env.API_KEY || '');
    request.params.set('language', 'ko-KR');
  }

  getTvDetail = async (id: number): Promise<TvDetail> => await this.get(`/${id}`);

  getAiringToday = async (page = 1): Promise<TVResult> =>
    await this.get('/airing_today', {
      params: {
        page,
      },
    });

  getPopular = async (page = 1): Promise<TVResult> =>
    await this.get('/popular', {
      params: {
        page,
      },
    });

  getTopRated = async (page = 1): Promise<TVResult> =>
    await this.get('/top_rated', {
      params: {
        page,
      },
    });
}

interface TV {
  id: number;
  name: string;
  original_name: string;
  first_air_date: string;
  original_language: string;
  overview: string;
  backdrop_path: string;
  popularity: number;
  vote_average: number;
}

interface TvDetail {
  id: number;
  name: string;
  overview: string;
  original_name: string;
  popularity: number;
  vote_average: number;
}

interface TVResult {
  page: number;
  results: [TV];
  total_pages: number;
  total_results: number;
}
