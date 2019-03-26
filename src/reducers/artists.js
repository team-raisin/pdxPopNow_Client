import { 
  FETCH_ARTISTS,
  CREATE_ARTIST,
  UPDATE_EMAIL
} from '../actions/artists';

const initialState = {
  artists: [],
  email: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_ARTISTS:
      return { ...state,
        artists: payload
      };
    case CREATE_ARTIST:
      return {
        ...state,
        artists: [...state.artists, payload]
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: payload
      };
    default: return state;
  }
}
