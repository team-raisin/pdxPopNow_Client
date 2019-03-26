import { getArtists } from '../services/artists';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const fetchArtists = () => ({
  type: FETCH_ARTISTS,
  payload: getArtists()
});
