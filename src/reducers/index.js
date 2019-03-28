import { combineReducers } from 'redux';
import artists from './artists';
import artistDetail from './artistDetail';
import session from './session';

export default combineReducers({
  artists,
  session,
  artistDetail
});
