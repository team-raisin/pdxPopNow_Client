import { 
  FETCH_ARTISTS,
  CREATE_ARTIST,
  ARTIST_SEARCH
} from '../actions/artists';

const initialState = {
  artists: [],
  artistSearch: ''

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
    case ARTIST_SEARCH:
      return { ...state, artistSearch: payload };
    default: return state;
  }
}
