import { gql } from 'apollo-server';

export default gql`
  type SeasonDetail {
    _id: String
    air_date: String
    episodes: [Episode]
    name: String
    overview: String
    id: Int
    poster_path: String
    season_number: Int
  }

  type Query {
    tv_season_detail(id: Int!, season: Int!): SeasonDetail
  }
`;
