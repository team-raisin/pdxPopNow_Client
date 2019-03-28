import { UPDATE_ARTIST_NAME, UPDATE_EMAIL } from '../actions/artistProfile';
import { FETCH_ARTISTS } from '../actions/artists';

const initialState = {
  artistName: '', 
  email: '',
  artists: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    // case UPDATE_PROFILE: {
    //   return {
    //     ...initialState
    //   };
    // }
    case UPDATE_ARTIST_NAME:
      return {
        ...state,
        artistName: payload
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: payload
      };
    case FETCH_ARTISTS:
      return {
        ...state,
        artists: payload
      };
    default:
      return state;
  }
}
