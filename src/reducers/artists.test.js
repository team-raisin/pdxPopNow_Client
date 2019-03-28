import reducer from './artists';
import { fetchArtists } from '../actions/artists';

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
});


