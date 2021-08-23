import axios, { AxiosResponse } from 'axios';

const api_key = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv',
});

export const getTvDetail = async (id: number): Promise<AxiosResponse> =>
  await api.get(`/${id}`, {
    params: {
      api_key,
      language: 'ko-KR',
    },
  });

export const getAiringToday = async (page = 1): Promise<AxiosResponse> =>
  await api.get('/airing_today', {
    params: {
      api_key,
      language: 'ko-KR',
      page,
    },
  });

export const getPopular = async (page = 1): Promise<AxiosResponse> =>
  await api.get('/popular', {
    params: {
      api_key,
      language: 'ko-KR',
      page,
    },
  });

export const getTopRated = async (page = 1): Promise<AxiosResponse> =>
  await api.get('/top_rated', {
    params: {
      api_key,
      language: 'ko-KR',
      page,
    },
  });
