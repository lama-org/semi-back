import { gql } from 'apollo-server';

export default gql`
  type Book {
    title: String
    releaseDate: String
  }

  type Query {
    books: [Book]
  }
`;
