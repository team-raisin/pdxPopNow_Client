import { get, post, put } from './request';

export const getArtists = () => get('/artist');
export const postArtist = artist => post('/artist', artist);
export const putArtist = (id, artist) => put(`/artist/${id}`, artist);
