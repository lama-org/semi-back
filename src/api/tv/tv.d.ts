import { Company, Country, Genres, Language } from '../movie/movie';
import { Episode } from './epicode';

export interface TVResult {
  page: number;
  results: [TV];
  total_pages: number;
  total_results: number;
}

export interface TV {
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

export interface TvDetail {
  id: number;
  name: string;
  overview: string;
  original_name: string;
  popularity: number;
  vote_average: number;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: [number];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  in_production: boolean;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: Episode;
  next_episode_to_air: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  seasons: Season[];
  spoken_languages: Language[];
  status: string;
  tagline: string;
  type: string;
  vote_count: number;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
