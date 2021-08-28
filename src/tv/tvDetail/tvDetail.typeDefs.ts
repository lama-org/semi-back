import { gql } from 'apollo-server';

export default gql`
  type CreatedBy {
    id: Int
    credit_id: String
    name: String
    gender: Int
    profile_path: String
  }

  type Network {
    name: String
    id: Int
    logo_path: String
    origin_country: String
  }

  type Season {
    air_date: String
    episode_count: Int
    id: Int
    name: String
    overview: String
    poster_path: String
    season_number: Int
  }

  type TvDetail {
    backdrop_path: String
    created_by: [CreatedBy]
    episode_run_time: [Int]
    first_air_date: String
    genres: [Genres]
    homepage: String
    id: Int
    in_production: Boolean
    languages: [String]
    last_air_date: String
    last_episode_to_air: Episode
    name: String
    next_episode_to_air: String
    networks: [Network]
    number_of_episodes: Int
    number_of_seasons: Int
    origin_country: [String]
    original_language: String
    original_name: String
    overview: String
    popularity: Int
    poster_path: String
    production_companies: [Company]
    production_countries: [Country]
    seasons: [Season]
    spoken_languages: [Language]
    status: String
    tagline: String
    type: String
    vote_average: Float
    vote_count: Int
  }

  type Query {
    tv_detail(id: Int!): TvDetail
  }
`;
