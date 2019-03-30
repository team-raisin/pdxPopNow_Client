import {
  FETCH_ARTIST,
  CLEAR_ARTIST
} from '../actions/artists';

const initialState = {
  artist: null
};

// what about including some loading state
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTIST:
      return {
        ...state,
        artist: action.payload
      };
    case CLEAR_ARTIST:
      return {
        ...state,
        artist: action.payload
      };
    default: return state;
  }
}
