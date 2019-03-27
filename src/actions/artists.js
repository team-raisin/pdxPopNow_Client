import { getArtists, postArtist } from '../services/artists';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const fetchArtists = () => ({
  type: FETCH_ARTISTS,
  payload: getArtists()
});

export const CREATE_ARTIST = 'CREATE_ARTIST';
export const createArtist = (
  artistName, 
  contact,
  email, 
  img, 
  website,
  facebook,
  twitter,
  instagram,
  bandCamp,
  soundcloud,
  youtube,
  vimeo,
  genre,
  description
  ) => ({
  type: CREATE_ARTIST,
  payload: postArtist({ 
    artistName, 
    contact,
    email, 
    img, 
    website,
    facebook,
    twitter,
    instagram,
    bandCamp,
    soundcloud,
    youtube,
    vimeo,
    genre,
    description
  }) 
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


