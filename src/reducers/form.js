import { FETCH_ARTISTS } from '../actions/Form';

const initialState = {
  artists: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_ARTISTS:
      return { ...state,
        artists: payload
      };
    default: return state;
  }
}
