import { SET_SESSION } from '../actions/session';

const initialState = {
  token: '',
  id: '',
  name: '',
  email: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SET_SESSION:
      return { ...state, ...payload };
    default:
      return state;
  }
}
