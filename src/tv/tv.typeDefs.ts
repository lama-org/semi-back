import { gql } from 'apollo-server-express';

export default gql`
  type TV {
    id: ID
    name: String
    original_name: String
    first_air_date: String
    original_language: String
    overview: String
    backdrop_path: String
    popularity: Float
    vote_average: Float
  }

  type TVResult {
    page: Int!
    results: [TV]
    total_pages: Int!
    total_results: Int!
  }

  type Query {
    airing_today(page: Int): TVResult
    popular(page: Int): TVResult
    top_rate(page: Int): TVResult
  }
`;
