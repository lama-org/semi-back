import { RESTDataSource } from 'apollo-datasource-rest';

export default class TvAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/tv';
  }

  getTvDetail = async (id: number) =>
    await this.get(`/${id}`, {
      api_key: process.env.API_KEY,
      language: 'ko-KR',
    });

  async getAiringToday(page = 1) {
    const { results } = await this.get('/airing_today', {
      api_key: process.env.API_KEY,
      language: 'ko-KR',
      page,
    });
    return results;
  }
  async getPopular(page = 1) {
    const { results } = await this.get('/popular', {
      api_key: process.env.API_KEY,
      language: 'ko-KR',
      page,
    });
    return results;
  }
  async getTopRated(page = 1) {
    const { results } = await this.get('/top_rated', {
      api_key: process.env.API_KEY,
      language: 'ko-KR',
      page,
    });
    return results;
  }
}
