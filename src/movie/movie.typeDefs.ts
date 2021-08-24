import { gql } from 'apollo-server';

export default gql`
  type Movie {
    title: String
    releaseDate: String
  }

  type Query {
    movies: [Movie]
  }
`;
