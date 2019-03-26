import { getArtists } from '../services/artists';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const fetchArtists = () => ({
  type: FETCH_ARTISTS,
  payload: getArtists()
});

export const CREATE_ARTIST = 'CREATE_ARTIST';
export const createArtist = (email, artistName, profilePic) => ({
  type: CREATE_ARTIST,
  payload: { email, artistName, profilePic }
});

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


