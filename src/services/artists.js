import { get, post } from './request';

export const getArtists = () => get('/artist');
export const postArtist = artist => post('/artist', artist);
