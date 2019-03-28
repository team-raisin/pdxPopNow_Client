import {
  FETCH_ARTIST
} from '../actions/artists';

const initialState = {
  artist: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ARTIST:
      return {
        ...state,
        artist: action.payload
      };
    default: return state;
  }
}
