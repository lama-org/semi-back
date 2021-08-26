import { gql } from 'apollo-server';

export default gql`
  type EpisodeDetail {
    id: ID
    name: String
    episoe_number: Int
    season_number: Int
    overview: String
    still_path: String
    vote_count: integer
    vote_average: Float
    production_code: String
    crew: [Crew]
    guest_stars: [GuestStars]
  }

  type Crew {
    id: ID
    name: String
    gender: Int
    popularity: Int
    profile_path: String
    department: String
    known_for_department: String
    job: String
  }

  type GuestStars {
    id: ID
    order: Int
    character: String
    name: String
    gender:Int
    known_for_department: String
    popularity: Int
    profile_path: String
  }

  type Query {
    tv_season_detail(id: Int!, season: Int!): EpisodeDetail
  }
`;
