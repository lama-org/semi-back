import { gql } from 'apollo-server';

export default gql`
  type Genres {
    id: Int
    name: String
  }

  type Company {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type Country {
    iso_3166_1: String
    name: String
  }

  type Language {
    english_name: String
    iso_639_1: String
    name: String
  }

  type MovieDetail {
    adult: Boolean
    backdrop_path: String
    budget: Int
    genres: [Genres]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [Company]
    production_countries: [Country]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [Language]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type Query {
    movie_detail(id: Int!): MovieDetail
  }
`;
