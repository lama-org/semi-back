import { gql } from 'apollo-server';

export default gql`
  type Movie {
    id: ID
    title: String
    original_title: String
    release_date: String
    original_language: String
    overview: String
    backdrop_path: String
    popularity: Float
    vote_average: Float
  }

  type MovieDetail {
    id: ID
    title: String
    overview: String
    original_title: String
    popularity: Float
    vote_average: Float
  }

  type MovieResult {
    page: Int!
    results: [Movie]
    total_pages: Int!
    total_results: Int!
  }

  type Query {
    movie_detail(id: Int!): MovieDetail
    now_playing(page: Int, region: String): MovieResult
    moviePopular(page: Int, region: String): MovieResult
    top_rated(page: Int, region: String): MovieResult
    upcoming(page: Int, region: String): MovieResult
  }
`;
