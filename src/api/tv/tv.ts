const resolvers = {
  Query: {
    airing_today: (_:any, { page }:any, { dataSources }:any) =>
      dataSources.TvAPI.getAiringToday(page),
    popular: (_:any, { page }:any, { dataSources }:any) =>
      dataSources.TvAPI.getPopular(page),
    top_rate: (_:any, { page }:any, { dataSources }:any) =>
      dataSources.TvAPI.getTopRated(page),
    tv_detail: (_:any, { id }:any, { dataSources }:any) =>
      dataSources.TvAPI.getTvDetail(id)
  },
};

export default resolvers;