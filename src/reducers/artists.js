import { 
  FETCH_ARTISTS,
  CREATE_ARTIST
} from '../actions/artists';

const initialState = {
  artists: []
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

    default: return state;
  }
}
