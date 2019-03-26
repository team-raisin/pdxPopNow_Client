import { getArtists } from '../services/artists';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const fetchArtists = () => ({
  type: FETCH_ARTISTS,
  payload: getArtists()
});

export const CREATE_ARTIST = 'CREATE_ARTIST';
export const createArtist = artist => ({
  type: CREATE_ARTIST,
  payload: artist
});


