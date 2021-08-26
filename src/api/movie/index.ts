import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

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

interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genres {
  id: number;
  name: string;
}

interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Movie {
  adult: boolean;
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  original_language: string;
  overview: string;
  backdrop_path: string;
  popularity: number;
  vote_average: number;
  genre_ids: [number];
  poster_path: string;
  video: boolean;
  vote_count: number;
}

interface MovieResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
