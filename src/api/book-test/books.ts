const books = [
  {
    title: '아프리카 청춘이다',
    releaseDate: '2010-02-20',
  },
  {
    title: '94년생 김우석',
    releaseDate: '2020-09-11',
  },
  {
    title: '그래프큐엘 너무 어렵다 ㅠㅠ',
    releaseDate: '2020-10-11',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;