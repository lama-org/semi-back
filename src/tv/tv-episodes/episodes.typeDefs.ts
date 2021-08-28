import { gql } from 'apollo-server-express';

export default gql`
  type Episode {
    air_date: String
    crew: [Crew]
    episode_number: Int
    guest_stars: [GuestStars]
    name: String
    overview: String
    id: Int
    production_code: String
    season_number: Int
    still_path: String
    vote_average: Float
    vote_count: Float
  }

  type Crew {
    id: Int
    credit_id: Int
    name: String
    department: String
    job: String
    profile_path: String
  }

  type GuestStars {
    id: ID
    name: String
    credit_id: Int
    character: String
    order: Int
    profile_path: String
  }

  type Query {
    tv_episode_detail(id: Int!, season: Int!, episode: Int!): Episode
  }
`;
