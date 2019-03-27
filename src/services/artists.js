import { get } from './request';

export const getArtists = () => get('/artist');

export const getArtist = id => {
  return get(`/artist/${id}`);
};
