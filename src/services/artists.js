import { get, post } from './request';

export const getArtists = () => get('/artist');

export const getArtist = id => {
  return get(`/artist/${id}`);
};

export const postArtist = artist => post('/artist', artist);
