import { getArtists, postArtist, getArtist } from '../services/artists';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const fetchArtists = () => ({
  type: FETCH_ARTISTS,
  payload: getArtists()
});

export const FETCH_ARTIST = 'FETCH_ARTIST';
export const fetchArtist = id => ({
  type: FETCH_ARTIST,
  payload: getArtist(id)
});

export const CREATE_ARTIST = 'CREATE_ARTIST';
export const createArtist = (artist) => ({
  type: CREATE_ARTIST,
  payload: postArtist(artist) 
});

export const ARTIST_SEARCH = 'ARTIST_SEARCH';
export const artistSearch = search => ({
  type: ARTIST_SEARCH,
  payload: search
});

//we might be able to delet these two
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: email
});

export const UPDATE_ARTIST = 'UPDATE_ARTIST';
export const updateArtist = artistName => ({
  type: UPDATE_ARTIST,
  payload: artistName
});

export const CLEAR_ARTIST = 'CLEAR_ARTIST';
export const clearArtist = () => ({
  type: CLEAR_ARTIST,
  payload: null
});
