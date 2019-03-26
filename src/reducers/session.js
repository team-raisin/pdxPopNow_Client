import { SET_TOKEN } from '../actions/session';

const initialState = {
  token: '',
  id: '',
  name: '',
  email: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SET_TOKEN:
      return { ...state, ...payload };
    default:
      return state;
  }
}