import reducer from './artists';
import { fetchArtists, artistSearch } from '../actions/artists';

jest.mock('../services/artists.js');

describe('artist reducer tests', () => {
  it('can handle getting posts', () => {
    const state = {
      artists: []
    };
    const getArtist = fetchArtists();
    const updatedState = reducer(state, getArtist);
    expect(updatedState).toEqual({ artists: Promise.resolve() });
  });

  it('handles search reducer', () => {
    const state = {
      artistSearch: ''
    };
    const getSearch = artistSearch();
    const updatedState = reducer(state, getSearch);
    expect(updatedState).toEqual({
      artistSearch: undefined
    });
  });
});


