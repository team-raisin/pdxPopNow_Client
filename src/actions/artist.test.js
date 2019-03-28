import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { 
  FETCH_ARTISTS,
  fetchArtists,
  // CREATE_ARTIST,
  // createArtist,
  // ARTIST_SEARCH,
  // artistSearch
} from './artists';

jest.mock('../services/artists.js');

describe('test for Artist actions', () => {
  it('fetches artists and creates action', (done) => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    ); 
    store.dispatch(fetchArtists());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_ARTISTS,
        payload: ['artists']
      });
      done();
    }, 500);
  });
 
});

