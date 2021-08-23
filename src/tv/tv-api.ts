const { RESTDataSource } = require('apollo-datasource-rest');

class TvAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/tv';
  }

  async getTvDetail(id: number) {
    const result = await this.get(`/${id}`, {
      api_key: process.env.API_KEY,
      language: 'ko-KR',
    });
    return result
  }
  async getAiringToday(page = 1) {
    const {results} = await this.get('/airing_today',{
      api_key: process.env.API_KEY,
      language: 'ko-KR',
      page
    });
    return results
  }
  async getPopular(page = 1) {
    const {results} = await this.get('/popular',{
      api_key: process.env.API_KEY,
      language: 'ko-KR',
      page
    });
    return results
  }
  async getTopRated(page = 1) {
    const {results} = await this.get('/top_rated',{
      api_key: process.env.API_KEY,
      language: 'ko-KR',
      page
    });
    return results
  }
}

module.exports = TvAPI;
export{}