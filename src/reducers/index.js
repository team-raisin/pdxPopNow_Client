import { combineReducers } from 'redux';
import artists from './artists';
import artistDetail from './artistDetail';

export default combineReducers({
  artists,
  artistDetail
});
