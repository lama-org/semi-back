import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { TvDetail, TVResult } from './tv';
import { SeasonDetail } from './seoson';
import { Episode } from './epicode';

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

  getTvSeasonDetail = async (id: number, season: number): Promise<SeasonDetail> =>
    await this.get(`/${id}/season/${season}`);

  getTvEpisodesDetail = async (id: number, season: number, episode: number): Promise<Episode> =>
    await this.get(`/${id}/season/${season}/episode/${episode}`);
}
