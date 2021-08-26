import { gql } from 'apollo-server';

export default gql`

  type Episode {
    id: ID
    season_number: Int
    name: String
    episode_number: Int
    overview: String
    air_date: String
    production_code: String
    still_path: String
    vote_average: Float
    vote_count: Float
    crew: [Crew]
    guest_stars: [GuestStars]
  }

  type Crew {
    id: ID
    name: String
    department: String
    job: String
    profile_path: String
  }

  type GuestStars {
    id: ID
    order: Int
    character: String
    name: String
    gender:Int
    profile_path: String
  }

  type Query {
    tv_episode_detail(id: Int!, season: Int!, episode: Int!): Episode
  }
`;
