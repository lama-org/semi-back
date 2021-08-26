import { gql } from 'apollo-server';

export default gql`
  type TvDetail {
    id: ID
    name: String
    overview: String
    original_name: String
    popularity: Float
    vote_average: Float
  }

  type Query {
    tv_detail(id: Int!): TvDetail
  }
`;
