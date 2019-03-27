import { combineReducers } from 'redux';
import artists from './artists';
import session from './session';

export default combineReducers({
  artists,
  session
});
