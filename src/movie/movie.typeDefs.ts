import { gql } from 'apollo-server';

export default gql`
  type Movie {
    adult: Boolean
    id: Int
    title: String
    original_title: String
    release_date: String
    original_language: String
    overview: String
    backdrop_path: String
    popularity: Float
    vote_average: Float
    genre_ids: [Int]
    poster_path: String
    video: Boolean
    vote_count: Int
  }

  type MovieResult {
    page: Int!
    results: [Movie]
    total_pages: Int!
    total_results: Int!
  }

  type Query {
    now_playing(page: Int, region: String): MovieResult
    moviePopular(page: Int, region: String): MovieResult
    top_rated(page: Int, region: String): MovieResult
    upcoming(page: Int, region: String): MovieResult
  }
`;
