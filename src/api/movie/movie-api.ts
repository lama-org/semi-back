import axios, { AxiosResponse } from 'axios';

const api_key = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
});

export const getMovieDetail = async (id: number): Promise<AxiosResponse> =>
  await api.get(`/${id}`, {
    params: {
      api_key,
      language: 'ko-KR',
    },
  });

export const getNowPlaying = async (page = 1, region: string): Promise<AxiosResponse> =>
  await api.get('/now_playing', {
    params: {
      api_key,
      language: 'ko-KR',
      page,
      region,
    },
  });

export const getPopular = async (page = 1, region: string): Promise<AxiosResponse> =>
  await api.get('/popular', {
    params: {
      api_key,
      language: 'ko-KR',
      page,
      region,
    },
  });

export const getTopRated = async (page = 1, region: string): Promise<AxiosResponse> =>
  await api.get('/top_rated', {
    params: {
      api_key,
      language: 'ko-KR',
      page,
      region,
    },
  });

export const getUpcoming = async (page = 1, region: string): Promise<AxiosResponse> =>
  await api.get('/upcoming', {
    params: {
      api_key,
      language: 'ko-KR',
      page,
      region,
    },
  });
