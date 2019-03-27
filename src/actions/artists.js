import { getArtists, getArtist } from '../services/artists';

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
export const createArtist = (email, 
  artistName, 
  img, 
  twitter,
  website,
  facebook,
  bandCamp,
  genre,
  description) => ({
  type: CREATE_ARTIST,
  payload: { email, 
    artistName, 
    img, 
    twitter,
    website,
    facebook,
    bandCamp,
    genre,
    description }
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


