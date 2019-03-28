import { putProfile } from '../services/artists';

export const UPDATE_ARTIST_NAME = 'UPDATE_ARTIST_NAME';
export const updateArtistName = (artistName) => ({
  type: UPDATE_ARTIST_NAME,
  payload: putProfile({ artistName }), 
});

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: putProfile({ email }), 
});

// export const UPDATE_ARTIST = 'UPDATE_ARTIST';
// export const updateArtist = artistName => ({
//   type: UPDATE_ARTIST,
//   payload: artistName
// });

// export const UPDATE_EMAIL = 'UPDATE_EMAIL';
// export const updateEmail = email => ({
//   type: UPDATE_EMAIL,
//   payload: email
// });
